"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const products = [
  {
    name: "Refinery",
    href: "/products/refinery",
    description: "Polish every sentence to perfection",
    color: "text-emerald-600",
  },
  {
    name: "Forge",
    href: "/products/forge",
    description: "Generate compelling content instantly",
    color: "text-orange-600",
  },
  {
    name: "Scrybe",
    href: "/products/scrybe",
    description: "Write with intelligent AI assistance",
    color: "text-indigo-600",
  },
  {
    name: "Gutenberg",
    href: "/products/gutenberg",
    description: "Format and publish with precision",
    color: "text-amber-600",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: "var(--mp-purple)" }}>
              MP
            </div>
            <span className="font-bold text-xl" style={{ color: "var(--mp-ink)" }}>
              MasterProse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Products dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors py-2"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className={`font-semibold text-sm ${p.color}`}>{p.name}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{p.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/chat"
              className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "var(--mp-purple)" }}
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Products</div>
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className={`font-medium text-sm ${p.color}`}>{p.name}</span>
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            {[
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            <div className="flex flex-col gap-2 px-2">
              <Link
                href="/chat"
                className="block text-center text-sm font-medium text-gray-700 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="block text-center text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--mp-purple)" }}
                onClick={() => setMobileOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
