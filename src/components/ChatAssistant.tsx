"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Copy,
  CornerDownLeft,
  Mail,
  RotateCcw,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

type Message = {
  from: "assistant" | "visitor";
  text: string;
};

const DEFAULT_WELCOME =
  "Hi! I’m Ahmad’s portfolio guide. Ask me anything about his projects, skills, background, or availability for work.";

const QUICK_PROMPTS = [
  "What services does Ahmad offer?",
  "Tell me about Ahmad's background & education",
  "How does the Eye Disease AI work?",
  "How can I hire or contact Ahmad?",
];

export default function ChatAssistant({
  isOpen,
  onClose,
  initialPrompt,
}: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    { from: "assistant", text: DEFAULT_WELCOME },
  ]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isThinking]);

  // Handle external initialPrompt trigger
  useEffect(() => {
    if (initialPrompt && isOpen) {
      askAssistant(null, initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const askAssistant = async (e: FormEvent | null, promptText = inputQuestion) => {
    e?.preventDefault();
    const query = promptText.trim();
    if (!query || isThinking) return;

    const nextMessages: Message[] = [...messages, { from: "visitor", text: query }];
    setMessages([...nextMessages, { from: "assistant", text: "" }]);
    setInputQuestion("");
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.reply ||
            "Unable to reach assistant. You can reach Ahmad directly at ahmed.jawadcs@gmail.com."
        );
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const eventChunks = buffer.split("\n\n");
        buffer = eventChunks.pop() || "";

        for (const chunk of eventChunks) {
          const dataLine = chunk
            .split("\n")
            .find((line) => line.startsWith("data: "));
          if (!dataLine) continue;

          const rawPayload = dataLine.slice(6).trim();
          if (rawPayload === "[DONE]") continue;

          try {
            const parsed = JSON.parse(rawPayload);
            const token = parsed.choices?.[0]?.delta?.content || "";
            accumulatedText += token;
            setMessages((prev) => [
              ...prev.slice(0, -1),
              { from: "assistant", text: accumulatedText },
            ]);
          } catch {
            // Ignore parse errors on partial streams
          }
        }
      }

      if (!accumulatedText) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            from: "assistant",
            text:
              "I'm ready to answer any questions about Ahmad's work. You can also email him directly at ahmed.jawadcs@gmail.com.",
          },
        ]);
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Could not complete response. You can email Ahmad directly at ahmed.jawadcs@gmail.com.";
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "assistant", text: errorMessage },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const resetChat = () => {
    setMessages([{ from: "assistant", text: DEFAULT_WELCOME }]);
    setInputQuestion("");
    setIsThinking(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg h-[90vh] sm:h-[620px] max-h-[90vh] theme-surface border shadow-2xl flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-700/50 flex items-center justify-between theme-surface-glass">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl theme-card-inner border flex items-center justify-center theme-text-accent">
              <Bot size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">AI Portfolio Guide</span>
                <span className="w-1.5 h-1.5 rounded-full bg-current theme-text-accent status-dot" />
              </div>
              <p className="text-[11px] text-slate-400">Ask about Ahmad&apos;s projects & skills</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={resetChat}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw size={15} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:theme-card-inner transition-colors"
              title="Close assistant"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((m, idx) => {
            const isAssistant = m.from === "assistant";
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
              >
                {isAssistant && (
                  <div className="w-6 h-6 rounded-full theme-card-inner border flex items-center justify-center theme-text-accent shrink-0 mt-0.5 text-xs font-bold">
                    AJ
                  </div>
                )}
                <div
                  className={`max-w-[85%] text-xs sm:text-sm p-3.5 rounded-2xl leading-relaxed ${
                    isAssistant
                      ? "theme-card-inner border text-slate-200 rounded-tl-sm"
                      : "theme-btn-primary font-semibold rounded-tr-sm shadow-md text-white"
                  }`}
                >
                  {m.text || (isThinking && idx === messages.length - 1 ? (
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-current theme-text-accent animate-pulse" />
                      <span>Thinking...</span>
                    </span>
                  ) : null)}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-4 py-2 border-t border-slate-700/50 theme-surface-glass overflow-x-auto no-scrollbar flex gap-1.5">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => askAssistant(null, p)}
              disabled={isThinking}
              className="text-[11px] px-3 py-1 rounded-full theme-card-inner text-slate-300 hover:text-white border whitespace-nowrap transition-all shrink-0 disabled:opacity-50"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={askAssistant}
          className="p-3 sm:p-4 border-t border-slate-700/50 theme-surface flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            placeholder="Ask a question in plain English..."
            disabled={isThinking}
            className="flex-1 px-3.5 py-2.5 rounded-xl theme-card-inner border text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[var(--border-highlight)] disabled:opacity-50 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputQuestion.trim() || isThinking}
            className="p-2.5 rounded-xl theme-btn-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md cursor-pointer"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
