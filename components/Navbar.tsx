"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { footerLinks } from "@/lib/data";

/**
 * Minimal fixed header. Stays transparent over the hero, then settles into a
 * subtle glass bar once the user starts scrolling.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Aura Infinity — home">
          <Logo />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-sm text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.05]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
