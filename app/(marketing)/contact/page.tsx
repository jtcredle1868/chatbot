"use client";

import { useState } from "react";
import { CheckCircle, Send, Calendar, Users, MessageSquare } from "lucide-react";

const products = ["Refinery", "Forge", "Scrybe", "Gutenberg"];
const teamSizes = ["1-5", "6-20", "21-100", "100+"];
const demoTimes = [
  "Morning (9am - 12pm)",
  "Afternoon (12pm - 3pm)",
  "Late Afternoon (3pm - 6pm)",
  "Flexible / Any time",
];

function InfoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    interests: [] as string[],
    message: "",
  });

  const handleCheck = (product: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(product)
        ? prev.interests.filter((p) => p !== product)
        : [...prev.interests, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--mp-purple)" }}
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks for reaching out!</h3>
        <p className="text-gray-500 max-w-sm">
          We have received your message and will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Acme Inc."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            value={form.jobTitle}
            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
            placeholder="Content Manager"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What are you interested in?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {products.map((product) => (
            <label
              key={product}
              className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                form.interests.includes(product)
                  ? "border-purple-400 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={form.interests.includes(product)}
                onChange={() => handleCheck(product)}
                className="rounded text-purple-600 focus:ring-purple-400"
              />
              <span className="text-sm font-medium text-gray-700">{product}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us how we can help..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-md"
        style={{ backgroundColor: "var(--mp-purple)" }}
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    demoTime: "",
    useCase: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--mp-purple)" }}
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo request received!</h3>
        <p className="text-gray-500 max-w-sm">
          Our team will reach out within 24 hours to confirm your demo time and send you a calendar invite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Acme Inc."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
        <select
          value={form.teamSize}
          onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all bg-white"
        >
          <option value="">Select team size</option>
          {teamSizes.map((size) => (
            <option key={size} value={size}>{size} people</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Demo Time</label>
        <select
          value={form.demoTime}
          onChange={(e) => setForm({ ...form, demoTime: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all bg-white"
        >
          <option value="">Select a time</option>
          {demoTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What is your primary use case?
        </label>
        <textarea
          rows={3}
          value={form.useCase}
          onChange={(e) => setForm({ ...form, useCase: e.target.value })}
          placeholder="e.g. Marketing content production, technical documentation, editorial workflows..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-md"
        style={{ backgroundColor: "var(--mp-purple)" }}
      >
        <Calendar className="w-4 h-4" />
        Request Demo
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"info" | "demo">("info");

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Get in{" "}
            <span style={{ color: "var(--mp-violet)" }}>Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Have a question or want to see Master Prose in action? We would love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left sidebar info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let&apos;s talk</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Whether you want to learn more about our products, request a live demo, or just say hello — our team is ready to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--mp-purple)" }}
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">General Inquiry</div>
                  <div className="text-sm text-gray-500">hello@masterprose.studio</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--mp-purple)" }}
                >
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Book a Demo</div>
                  <div className="text-sm text-gray-500">30-minute personalized walkthrough</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--mp-purple)" }}
                >
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Enterprise</div>
                  <div className="text-sm text-gray-500">enterprise@masterprose.studio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            {/* Tab headers */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab("info")}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "info"
                    ? "border-purple-600 text-purple-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Information Request
              </button>
              <button
                onClick={() => setActiveTab("demo")}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "demo"
                    ? "border-purple-600 text-purple-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Request a Demo
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              {activeTab === "info" ? <InfoForm /> : <DemoForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
