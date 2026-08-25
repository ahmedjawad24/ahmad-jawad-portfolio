import { NextResponse } from "next/server";

const portfolioContext = `You are Ahmad Jawad's professional portfolio assistant. Answer visitors warmly and concisely using only this context:
Ahmad is an Applied AI & MLOps Engineer and BS Computer Science graduate from Pak Austria Fachhochschule: Institute of Applied Sciences & Technology. He is open to job opportunities globally.
He builds trustworthy AI systems from prototype to production, with interests in GenAI, agentic workflows, MLOps, evaluation, explainability, and intelligent products.
Projects: Proof of Trust (Next.js, Solana, Rust, AI evaluation); FraudLens (Python, scikit-learn, Streamlit, imbalance-aware fraud detection); Explainable Retinal AI (PyTorch, EfficientNet, FastAPI, Grad-CAM); PEL Intelligence (Python, Random Forest, operational dashboard); CareBridge (TypeScript, Next.js, agentic AI); LiteMod3D (private 3D/computer vision case study); Lightweight Brain Tumor Segmentation (private medical imaging case study); Email Tone Analyzer (private NLP case study); Soil Crop Predictor (Python, Streamlit).
Contact Ahmad at ahmadjawad24@users.noreply.github.com or LinkedIn at linkedin.com/in/ahmad-jawad-248870267.
Do not invent employers, dates, metrics, degrees, or personal details. For questions outside this context, say you cannot verify the answer and direct the visitor to email Ahmad.`;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ reply: "The AI concierge is offline right now. Ahmad can answer directly at ahmadjawad24@users.noreply.github.com." });
  try {
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", temperature: 0.4, max_tokens: 220, messages: [{ role: "system", content: portfolioContext }, ...messages.map((message: { from: string; text: string }) => ({ role: message.from === "visitor" ? "user" : "assistant", content: message.text }))] }),
    });
    if (!response.ok) throw new Error("Chat provider returned an error");
    const data = await response.json();
    return NextResponse.json({ reply: data.choices?.[0]?.message?.content || "I could not form a reliable answer. Please email Ahmad directly." });
  } catch {
    return NextResponse.json({ reply: "I’m unable to reach the AI service right now. Ahmad can answer directly at ahmadjawad24@users.noreply.github.com." }, { status: 200 });
  }
}
