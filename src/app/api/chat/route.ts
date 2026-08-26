import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;
const requestLog = new Map<string, { count: number; resetAt: number }>();

const portfolioContext = `You are AJ, Ahmad Jawad's live portfolio guide. Help a recruiter, client, or engineer quickly understand Ahmad's work. Be warm, direct, and specific. Keep replies under 120 words unless the visitor asks for detail.

PROFILE: Ahmad is an Applied AI & MLOps Engineer and BS Computer Science graduate from Pak Austria Fachhochschule: Institute of Applied Sciences & Technology. He is open to global opportunities. His focus is turning complex AI into clear, reliable products: GenAI, agentic workflows, evaluation, explainability, MLOps, and production-minded software.

PROJECTS: Proof of Trust (Next.js, Solana, Rust, AI evaluation, accountability for AI responses); FraudLens (Python, scikit-learn, Streamlit, imbalance-aware fraud detection, PR-AUC 0.874); Explainable Retinal AI (PyTorch, EfficientNet, FastAPI, Grad-CAM, human review); PEL Intelligence (Python, Random Forest, operational analytics dashboard); CareBridge (TypeScript, Next.js, agentic AI); Soil Crop Predictor (Python, Streamlit). Private case studies: LiteMod3D (3D/computer vision), Lightweight Brain Tumor Segmentation (medical imaging), Email Tone Analyzer (NLP).

CONTACT: ahmed.jawadcs@gmail.com, github.com/ahmedjawad24, linkedin.com/in/ahmad-jawad-248870267.

RULES: Never invent employers, dates, metrics, degrees, clients, or personal details. If information is missing, say it is not verified and offer Ahmad's email. When asked what to explore, recommend one relevant project and explain why.`;

function getClientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = requestLog.get(key);
  if (!current || current.resetAt <= now) {
    requestLog.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

function getSafeMessages(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.slice(-10).flatMap((message) => {
    if (!message || typeof message !== "object") return [];
    const candidate = message as { from?: unknown; text?: unknown };
    if ((candidate.from !== "visitor" && candidate.from !== "assistant") || typeof candidate.text !== "string") return [];
    const text = candidate.text.trim().slice(0, 2000);
    return text ? [{ role: candidate.from === "visitor" ? "user" : "assistant", content: text }] : [];
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ reply: "The live assistant is offline right now. Ahmad can answer directly at ahmad.jawadcs@gmail.com." }, { status: 503 });
  if (isRateLimited(getClientKey(request))) return NextResponse.json({ reply: "You have reached the assistant's hourly limit. Please try again later or email Ahmad directly." }, { status: 429 });
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 30_000) return NextResponse.json({ reply: "That message is too long. Please keep questions under 2,000 characters." }, { status: 413 });
    const body = await request.json();
    const messages = getSafeMessages(body.messages);
    if (!messages.length || messages[messages.length - 1].role !== "user") return NextResponse.json({ reply: "Please send a question about Ahmad's work, skills, or availability." }, { status: 400 });
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", temperature: 0.35, max_tokens: 260, stream: true, messages: [{ role: "system", content: portfolioContext }, ...messages] }),
    });
    if (!response.ok) {
      if (response.status === 401) return NextResponse.json({ reply: "The assistant key was rejected. Create a new OpenAI key and update your local environment." }, { status: 502 });
      if (response.status === 429) return NextResponse.json({ reply: "The assistant is connected, but this OpenAI account has reached its usage limit. Check billing, credits, or project limits in OpenAI, then restart the app." }, { status: 503 });
      if (response.status === 404) return NextResponse.json({ reply: "The configured AI model is unavailable for this key. Set OPENAI_MODEL to a model enabled for your OpenAI project." }, { status: 503 });
      return NextResponse.json({ reply: "OpenAI is temporarily unavailable. Please try again shortly." }, { status: 503 });
    }
    if (!response.body) throw new Error("Chat provider returned an invalid stream");
    return new Response(response.body, { headers: { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache", Connection: "keep-alive" } });
  } catch (error) {
    console.error("Portfolio assistant request failed", error);
    return NextResponse.json({ reply: "I’m unable to reach the live assistant right now. Ahmad can answer directly at ahmad.jawadcs@gmail.com." }, { status: 503 });
  }
}
