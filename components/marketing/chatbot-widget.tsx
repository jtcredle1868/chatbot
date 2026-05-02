"use client";

import { useId, useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export function ChatbotWidget() {
  const id = useId();
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    id,
    transport: new DefaultChatTransport({ api: "/api/widget-chat" }),
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || status === "streaming") return;
    sendMessage({ role: "user", parts: [{ type: "text", text: input }] });
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ width: 340, height: 480 }}
        >
          {/* Header */}
          <div
            style={{ backgroundColor: "var(--mp-purple)" }}
            className="px-4 py-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">MP</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  Master Prose
                </p>
                <p className="text-purple-200 text-xs">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Greeting */}
            <div className="flex gap-2">
              <div
                style={{ backgroundColor: "var(--mp-purple)" }}
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <span className="text-white text-xs font-bold">MP</span>
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
                <p className="text-gray-800 text-sm">
                  Hi! I&apos;m your Master Prose assistant. How can I help you today?
                </p>
              </div>
            </div>

            {messages.map((m) => {
              const textPart = m.parts?.find((p) => p.type === "text");
              const content = textPart && "text" in textPart ? textPart.text : "";
              if (!content) return null;
              return (
                <div
                  key={m.id}
                  className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {m.role === "assistant" && (
                    <div
                      style={{ backgroundColor: "var(--mp-purple)" }}
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span className="text-white text-xs font-bold">MP</span>
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-3 py-2 max-w-[80%] text-sm ${
                      m.role === "user"
                        ? "text-white rounded-tr-sm"
                        : "bg-gray-100 text-gray-800 rounded-tl-sm"
                    }`}
                    style={
                      m.role === "user"
                        ? { backgroundColor: "var(--mp-purple)" }
                        : {}
                    }
                  >
                    {content}
                  </div>
                </div>
              );
            })}

            {status === "streaming" && (
              <div className="flex gap-2">
                <div
                  style={{ backgroundColor: "var(--mp-purple)" }}
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-white text-xs font-bold">MP</span>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2">
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 p-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-purple-400"
            />
            <button
              type="submit"
              disabled={!input.trim() || status === "streaming"}
              style={{ backgroundColor: "var(--mp-purple)" }}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white disabled:opacity-50 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{ backgroundColor: "var(--mp-purple)" }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
