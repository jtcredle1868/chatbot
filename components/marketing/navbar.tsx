"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  { name: "Refinery", href: "/products/refinery", desc: "AI-powered editing" },
  { name: "Forge", href: "/products/forge", desc: "Content generation" },
  { name: "Scrybe", href: "/products/scrybe", desc: "Writing interface" },
  { name: "Gutenberg", href: "/products/gutenberg", desc: "Publishing suite" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "var(--mp-ink)" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              style={{ backgroundColor: "var(--mp-purple)" }}
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <span className="text-white text-sm font-bold">MP</span>
            </div>
            <span className="text-white text-lg font-bold tracking-tight">
              MasterProse
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
              >
                Products
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  style={{ backgroundColor: "var(--mp-slate)" }}
                  className="absolute top-full left-0 mt-1 w-52 rounded-lg shadow-xl border border-white/10 py-2"
                >
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="block px-4 py-2.5 hover:bg-white/10 transition-colors"
                    >
                      <div className="text-white text-sm font-medium">
                        {p.name}
                      </div>
                      <div className="text-gray-400 text-xs">{p.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              style={{
                borderColor: "var(--mp-gold)",
                color: "var(--mp-gold)",
              }}
              className="border px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500/10 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/chat"
              style={{ backgroundColor: "var(--mp-purple)" }}
              className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{ backgroundColor: "var(--mp-slate)" }}
          className="md:hidden border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            <div className="text-xs text-gray-500 uppercase tracking-wider px-2 mb-2">
              Products
            </div>
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="block px-2 py-1.5 text-gray-300 hover:text-white transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {p.name}
              </Link>
            ))}
            <div className="border-t border-white/10 my-2" />
            {[
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-2 py-1.5 text-gray-300 hover:text-white transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                style={{
                  borderColor: "var(--mp-gold)",
                  color: "var(--mp-gold)",
                }}
                className="border text-center px-4 py-2 rounded-lg text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Request Demo
              </Link>
              <Link
                href="/chat"
                style={{ backgroundColor: "var(--mp-purple)" }}
                className="text-white text-center px-4 py-2 rounded-lg text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
