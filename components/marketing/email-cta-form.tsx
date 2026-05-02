"use client";

import { useState } from "react";

export function EmailCtaForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
          style={{ backgroundColor: "rgba(109,40,217,0.15)" }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--mp-violet)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-white text-xl font-bold mb-2">You&apos;re on the list!</h3>
        <p className="text-purple-200">
          We&apos;ll be in touch soon with early access details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: "var(--mp-gold)" }}
        className="px-7 py-3.5 rounded-xl font-semibold text-gray-900 hover:opacity-90 transition-opacity disabled:opacity-60 text-sm whitespace-nowrap"
      >
        {loading ? "Joining..." : "Get Early Access"}
      </button>
    </form>
  );
}
