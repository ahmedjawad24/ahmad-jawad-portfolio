import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 30;
const requestLog = new Map<string, { count: number; resetAt: number }>();

const portfolioContext = `You are the friendly AI assistant for Ahmad Jawad's portfolio. Your goal is to help recruiters, engineering managers, clients, and visitors quickly learn about Ahmad's work, skills, and background.

COMMUNICATION STYLE:
- Warm, polite, concise, and easy to understand (avoid heavy jargon unless specifically asked for deep technical details).
- Explain projects in plain English so anyone can appreciate the real-world value.
- Keep answers under 120 words unless more detail is requested.

PROFILE OVERVIEW:
- Name: Ahmad Jawad
- Role: Applied AI & Machine Learning Engineer
- Degree: BS in Computer Science from Pak-Austria Fachhochschule (PAF-IAST)
- Status: Available for full-time engineering roles, AI consulting, and software projects globally (Remote / Hybrid).
- Contact: ahmed.jawadcs@gmail.com | Phone/WhatsApp: +92 348 2991158 | GitHub: github.com/ahmedjawad24 | LinkedIn: linkedin.com/in/ahmad-jawad-248870267

KEY PROJECTS:
1. Proof of Trust: An AI accountability system that double-checks AI answers with multiple models and logs verified proof so answers are accurate and cannot be tampered with.
2. Eye Disease Detection AI (Explainable Retinal AI): A medical tool that spots eye diseases from retinal photos and highlights the exact problem areas with visual heatmaps for doctors (96.2% accuracy).
3. FraudLens: A smart fraud detection system that stops illegal transactions while reducing annoying false alarms for legitimate customers (-34% false alarms).
4. CareBridge: A helpful patient check-in assistant that collects medical symptoms and creates neat summaries for doctors.
5. PEL Equipment Intelligence: Predictive maintenance dashboard that forecasts factory machine breakdowns up to 48 hours early.
6. Soil & Crop Predictor: An easy app for farmers that recommends the best crops based on soil nutrients and local weather.
7. Private research studies: Brain MRI Scan Analyzer, LiteMod3D, Smart Email Tone Assistant.

CORE SKILLS:
- AI & Machine Learning: Python, PyTorch, Computer Vision, Scikit-Learn, Predictive Modeling.
- AI Assistants & Agents: OpenAI, Gemini, Custom Knowledge (RAG), Safety Guardrails, Prompt Design.
- Backend & Cloud: FastAPI, Docker, Streamlit Dashboards, Cloud Deployment.
- Web Development: Next.js, React, TypeScript, Tailwind CSS.

RULES:
- Always be honest. If something is unknown, invite the user to email Ahmad directly at ahmed.jawadcs@gmail.com.
- Do not invent degrees, employers, or metrics.`;

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

function localReply(question: string) {
  const text = question.toLowerCase();
  if ((text.includes("which") || text.includes("recommend") || text.includes("first")) && text.includes("project")) {
    return "I recommend starting with Proof of Trust! It's Ahmad's system for double-checking AI responses across multiple models to ensure accuracy and trust. Another great one is Eye Disease Detection AI, which highlights diagnostic areas on retinal photos with 96.2% accuracy.";
  }
  if (text.includes("proof") || text.includes("trust")) {
    return "Proof of Trust is an AI accountability system. It double-checks answers using multiple AI models and records tamper-proof verification so users can be confident in the output.";
  }
  if (text.includes("fraud") || text.includes("fraudlens") || text.includes("risk")) {
    return "FraudLens is a smart fraud screening app. It is specially tuned to catch rare fraudulent transactions while reducing false alarms by 34%, giving legitimate customers a smooth experience.";
  }
  if (text.includes("eye") || text.includes("retina") || text.includes("medical") || text.includes("health")) {
    return "Eye Disease Detection AI analyzes retinal photos to detect conditions with 96.2% accuracy. It highlights the exact problem areas on the photo so eye doctors can quickly review and verify the findings.";
  }
  if (text.includes("skill") || text.includes("stack") || text.includes("technology") || text.includes("tools")) {
    return "Ahmad works with Python, PyTorch, computer vision, OpenAI & Gemini APIs, FastAPI, Docker, Next.js, React, TypeScript, and Streamlit. He builds full-stack AI applications from model training to web interfaces.";
  }
  if (text.includes("hire") || text.includes("job") || text.includes("available") || text.includes("contact") || text.includes("email")) {
    return "Ahmad is currently open for full-time engineering roles, AI consulting, and software projects globally. You can reach him directly at ahmed.jawadcs@gmail.com or via WhatsApp at +92 348 2991158.";
  }
  if (text.includes("about") || text.includes("who") || text.includes("background") || text.includes("education")) {
    return "Ahmad Jawad is an Applied AI & Machine Learning Engineer with a BS in Computer Science from Pak-Austria Fachhochschule (PAF-IAST). He specializes in turning machine learning into practical, easy-to-use software applications.";
  }
  return "I can help you explore Ahmad's projects, skills, background, or availability. Try asking about his Eye Disease AI, Proof of Trust, fraud detection system, or how to get in touch!";
}

function localStream(reply: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: reply } }] })}\n\n`));
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });
  return new Response(stream, { headers: { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache", "X-Assistant-Mode": "local" } });
}

export async function POST(request: Request) {
  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json({ reply: "You have reached the assistant's hourly limit. Please email Ahmad directly at ahmed.jawadcs@gmail.com." }, { status: 429 });
  }

  let latestQuestion = "explore Ahmad's work";
  let messages: { role: string; content: string }[] = [];

  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 30_000) {
      return NextResponse.json({ reply: "That message is too long. Please keep questions under 2,000 characters." }, { status: 413 });
    }
    const body = await request.json();
    messages = getSafeMessages(body.messages);
    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return NextResponse.json({ reply: "Please send a question about Ahmad's work, skills, or availability." }, { status: 400 });
    }
    latestQuestion = messages[messages.length - 1].content;
  } catch (err) {
    console.error("Failed to parse request body:", err);
    return localStream(localReply("explore Ahmad's work"));
  }

  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (geminiApiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey: geminiApiKey });
      const contents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const streamResult = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction: portfolioContext,
          temperature: 0.35,
          maxOutputTokens: 350,
        },
      });

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of streamResult) {
              const text = chunk.text;
              if (text) {
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: text } }] })}\n\n`)
                );
              }
            }
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
          } catch (streamErr) {
            controller.error(streamErr);
          }
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    } catch (geminiErr) {
      console.warn("Gemini streaming failed, falling back to local responder:", geminiErr);
      return localStream(localReply(latestQuestion));
    }
  }

  return localStream(localReply(latestQuestion));
}
