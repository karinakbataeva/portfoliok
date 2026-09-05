"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import star from "@/public/images/star-icon.png";

const LINKS = [
  { hash: "#selected-work", label: "Work" },
  { hash: "#about", label: "About" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // On a case study page the homepage anchors have to be absolute.
  const to = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md" : ""
      }`}
    >
      <div className="shell">
        <div className="flex h-20 items-center justify-between gap-6 border-b border-border">
          <a
            href={onHome ? "#top" : "/"}
            className="inline-flex min-h-11 cursor-pointer items-center gap-3"
          >
            <Image src={star} alt="" aria-hidden="true" className="h-7 w-7" />
            <span className="text-[0.95rem] font-semibold tracking-tight">
              Karina Bataeva
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="flex items-center gap-7 text-sm md:gap-10">
              {LINKS.map((link) => (
                <li key={link.hash}>
                  <a
                    href={to(link.hash)}
                    className="inline-flex min-h-11 cursor-pointer items-center text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="group inline-flex min-h-11 cursor-pointer items-center gap-1.5 font-medium"
                >
                  <span className="border-b border-foreground pb-0.5 transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                    Let&rsquo;s talk
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
