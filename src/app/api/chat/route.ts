import { NextResponse } from "next/server";

const portfolioContext = `You are AJ, Ahmad Jawad's live portfolio guide. Help a recruiter, client, or engineer quickly understand Ahmad's work. Be warm, direct, and specific. Keep replies under 120 words unless the visitor asks for detail.

PROFILE: Ahmad is an Applied AI & MLOps Engineer and BS Computer Science graduate from Pak Austria Fachhochschule: Institute of Applied Sciences & Technology. He is open to global opportunities. His focus is turning complex AI into clear, reliable products: GenAI, agentic workflows, evaluation, explainability, MLOps, and production-minded software.

PROJECTS: Proof of Trust (Next.js, Solana, Rust, AI evaluation, accountability for AI responses); FraudLens (Python, scikit-learn, Streamlit, imbalance-aware fraud detection, PR-AUC 0.874); Explainable Retinal AI (PyTorch, EfficientNet, FastAPI, Grad-CAM, human review); PEL Intelligence (Python, Random Forest, operational analytics dashboard); CareBridge (TypeScript, Next.js, agentic AI); Soil Crop Predictor (Python, Streamlit). Private case studies: LiteMod3D (3D/computer vision), Lightweight Brain Tumor Segmentation (medical imaging), Email Tone Analyzer (NLP).

CONTACT: ahmed.jawadcs@gmail.com, github.com/ahmedjawad24, linkedin.com/in/ahmad-jawad-248870267.

RULES: Never invent employers, dates, metrics, degrees, clients, or personal details. If information is missing, say it is not verified and offer Ahmad's email. When asked what to explore, recommend one relevant project and explain why.`;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ reply: "The live assistant is offline right now. Ahmad can answer directly at ahmad.jawadcs@gmail.com." }, { status: 503 });
  try {
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", temperature: 0.35, max_tokens: 260, stream: true, messages: [{ role: "system", content: portfolioContext }, ...messages.map((message: { from: string; text: string }) => ({ role: message.from === "visitor" ? "user" : "assistant", content: message.text }))] }),
    });
    if (!response.ok || !response.body) throw new Error("Chat provider returned an invalid stream");
    return new Response(response.body, { headers: { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache", Connection: "keep-alive" } });
  } catch {
    return NextResponse.json({ reply: "I’m unable to reach the live assistant right now. Ahmad can answer directly at ahmad.jawadcs@gmail.com." }, { status: 503 });
  }
}
