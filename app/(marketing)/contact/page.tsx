"use client";

import { useState } from "react";
import Link from "next/link";

type TabType = "info" | "demo";

function InfoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    interests: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const interestOptions = [
    "Refinery (AI Editing)",
    "Forge (Content Generation)",
    "Scrybe (Writing Interface)",
    "Gutenberg (Publishing)",
    "Enterprise Plan",
    "API Access",
  ];

  function toggleInterest(interest: string) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
          style={{ backgroundColor: "rgba(109,40,217,0.1)" }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--mp-purple)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--mp-ink)" }}>
          Message received!
        </h3>
        <p className="text-gray-500">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
            Full Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-shadow"
            style={{
              borderColor: errors.name ? "#ef4444" : "#e5e7eb",
            }}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
            Work Email *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-shadow"
            style={{ borderColor: errors.email ? "#ef4444" : "#e5e7eb" }}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
            Company
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
            Job Title
          </label>
          <input
            type="text"
            value={form.jobTitle}
            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none"
            placeholder="Content Manager"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "var(--mp-ink)" }}>
          I&apos;m interested in
        </label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
              style={
                form.interests.includes(interest)
                  ? {
                      backgroundColor: "var(--mp-purple)",
                      borderColor: "var(--mp-purple)",
                      color: "white",
                    }
                  : {
                      backgroundColor: "white",
                      borderColor: "#e5e7eb",
                      color: "var(--mp-muted)",
                    }
              }
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
          Message *
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none resize-none"
          style={{ borderColor: errors.message ? "#ef4444" : "#e5e7eb" }}
          placeholder="Tell us about your use case or ask any questions..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: "var(--mp-purple)" }}
        className="w-full py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    useCase: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.useCase.trim()) e.useCase = "Please describe your use case";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
          style={{ backgroundColor: "rgba(245,158,11,0.1)" }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--mp-gold)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--mp-ink)" }}>
          Demo request received!
        </h3>
        <p className="text-gray-500 mb-4">
          Our team will reach out within 24 hours to schedule your personalized demo.
        </p>
        <Link
          href="/blog"
          className="text-sm font-medium"
          style={{ color: "var(--mp-purple)" }}
        >
          Read the blog while you wait →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
            Full Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none"
            style={{ borderColor: errors.name ? "#ef4444" : "#e5e7eb" }}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
            Work Email *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none"
            style={{ borderColor: errors.email ? "#ef4444" : "#e5e7eb" }}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
          Company Name *
        </label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none"
          style={{ borderColor: errors.company ? "#ef4444" : "#e5e7eb" }}
          placeholder="Acme Corporation"
        />
        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
          Team Size
        </label>
        <select
          value={form.teamSize}
          onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none bg-white"
        >
          <option value="">Select team size</option>
          <option value="1">Just me</option>
          <option value="2-5">2–5 people</option>
          <option value="6-20">6–20 people</option>
          <option value="21-50">21–50 people</option>
          <option value="51-200">51–200 people</option>
          <option value="200+">200+ people</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--mp-ink)" }}>
          Describe your use case *
        </label>
        <textarea
          value={form.useCase}
          onChange={(e) => setForm({ ...form, useCase: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none resize-none"
          style={{ borderColor: errors.useCase ? "#ef4444" : "#e5e7eb" }}
          placeholder="Tell us about your content workflow, team goals, and what you hope to achieve with Master Prose..."
        />
        {errors.useCase && <p className="text-red-500 text-xs mt-1">{errors.useCase}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: "var(--mp-gold)" }}
        className="w-full py-3.5 rounded-xl text-gray-900 font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<TabType>("demo");

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)",
        }}
        className="py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-xl text-gray-300">
            Whether you have questions, need a personalized demo, or want to explore
            enterprise options — we&apos;re here.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--mp-ink)" }}>
                Contact info
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    value: "hello@masterprose.studio",
                    sub: "We respond within 24 hours",
                  },
                  {
                    icon: "📞",
                    label: "Sales",
                    value: "+1 (415) 555-0192",
                    sub: "Mon–Fri, 9am–6pm PT",
                  },
                  {
                    icon: "📍",
                    label: "Headquarters",
                    value: "San Francisco, CA",
                    sub: "500 Howard St, Suite 200",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-medium text-sm" style={{ color: "var(--mp-ink)" }}>
                        {item.value}
                      </div>
                      <div className="text-gray-400 text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 rounded-2xl p-6"
                style={{ backgroundColor: "var(--mp-cream)" }}
              >
                <div className="text-lg font-bold mb-2" style={{ color: "var(--mp-ink)" }}>
                  Enterprise plans
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Need custom contracts, SSO, dedicated support, or on-premises deployment?
                  Our enterprise team is ready.
                </p>
                <a
                  href="mailto:enterprise@masterprose.studio"
                  className="text-sm font-semibold"
                  style={{ color: "var(--mp-purple)" }}
                >
                  Contact enterprise team →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-1 p-1 rounded-xl bg-gray-100 mb-8 max-w-xs">
                {(["demo", "info"] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all"
                    style={
                      activeTab === tab
                        ? {
                            backgroundColor: "white",
                            color: "var(--mp-purple)",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }
                        : { color: "var(--mp-muted)" }
                    }
                  >
                    {tab === "demo" ? "Request Demo" : "General Inquiry"}
                  </button>
                ))}
              </div>

              {activeTab === "demo" ? <DemoForm /> : <InfoForm />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
