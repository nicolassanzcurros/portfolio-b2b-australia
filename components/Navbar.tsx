"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="w-full max-w-3xl rounded-4xl border border-white/50 bg-white/50 shadow-glass backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
          {/* Wordmark */}
          <Link
            href="/"
            className="shrink-0 font-display text-sm font-extrabold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            Nicolás<span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-white/60 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:text-accent sm:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="flex flex-col gap-1 border-t border-ink/10 px-3 py-3 sm:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white/60 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
