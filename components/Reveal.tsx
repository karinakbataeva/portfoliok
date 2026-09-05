"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  /** Stagger the element's direct children instead of the element itself. */
  stagger?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "section" | "figure" | "ul" | "article";
};

export default function Reveal({
  children,
  stagger = false,
  className,
  style,
  as: Tag = "div",
}: Props) {
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(el);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const node = el.current;
      if (!node) return;

      const targets = stagger ? Array.from(node.children) : node;

      gsap.from(targets, {
        opacity: 0,
        y: stagger ? 24 : 14,
        duration: stagger ? 0.5 : 0.4,
        stagger: stagger ? 0.07 : 0,
        ease: stagger ? "power2.out" : "power1.out",
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => mm.revert();
  }, [stagger]);

  return (
    <Tag ref={el as never} className={className} style={style}>
      {children}
    </Tag>
  );
}
