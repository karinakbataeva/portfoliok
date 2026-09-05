"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const EMAIL = "karinakbataeva@gmail.com";

export default function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="scroll-mt-24 rule-top py-24 md:py-32">
      <div className="shell">
        <Reveal stagger className="max-w-3xl">
          <p className="eyebrow">Say hello</p>
          <h2 className="mt-6 text-[clamp(2.25rem,5.6vw,5rem)] leading-[1.02] [text-wrap:normal]">
            Have a messy problem{" "}
            <span className="text-accent italic">worth solving?</span>
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-block cursor-pointer border-b border-foreground pb-2 font-display text-[clamp(1.25rem,2.6vw,2rem)] transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {EMAIL}
          </a>
        </Reveal>

        <div className="rule-top mt-20 flex flex-wrap items-center justify-between gap-4 pt-8 text-sm text-muted">
          <p>© 2026 Karina Bataeva</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={copy}
              aria-live="polite"
              className="inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-accent"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              href="#top"
              className="inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-accent"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
