"use client";

import { useState } from "react";

export function EmailCtaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <p className="text-green-400 font-semibold">
        Thanks! We will be in touch soon.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setSubmitted(true);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg whitespace-nowrap text-sm"
        style={{ backgroundColor: "var(--mp-gold)" }}
      >
        Get Started Free
      </button>
    </form>
  );
}
