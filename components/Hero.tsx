"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["I", "go", "find", "it", "first."];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(root);

    // Desktop + motion allowed: pin the hero and write the headline in on scroll.
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=110%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to("[data-hero='setup']", { opacity: 0.4, y: -18 }, 0)
          .from(
            "[data-hero='word']",
            {
              yPercent: 118,
              opacity: 0,
              duration: 1,
              stagger: 0.35,
              ease: "power3.out",
            },
            0,
          )
          .from(
            "[data-hero='tail'] > *",
            {
              opacity: 0,
              y: 24,
              duration: 0.8,
              stagger: 0.25,
              ease: "power2.out",
            },
            1.3,
          );
      },
    );

    // Mobile (or anywhere pinning is a bad idea): same beat, played on load.
    mm.add(
      "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.from("[data-hero='word']", {
          yPercent: 118,
          opacity: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: "power3.out",
        });
      },
    );

    // Fonts change the line box, which changes the pin distance.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="flex min-h-screen flex-col justify-center">
      <div className="shell">
        <div className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-24">
          <h1 className="text-[clamp(2.75rem,7.2vw,7.5rem)] leading-[0.98] [text-wrap:normal]">
            <span data-hero="setup" className="block">
              Most roadmaps assume the problem.
            </span>
            <span className="block text-accent italic">
              {HEADLINE.map((word, i) => (
                <Fragment key={word}>
                  <span className="word-mask">
                    <span data-hero="word" className="inline-block">
                      {word}
                    </span>
                  </span>
                  {i < HEADLINE.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
          </h1>

          <div data-hero="tail" className="mt-12 md:mt-16">
            <p className="max-w-[34rem] text-muted">
              I&rsquo;m Karina, a product manager who&rsquo;s caught a trust
              problem 50 conversations deep that a dashboard would&rsquo;ve
              missed, evaluated AI models against real cultural context, and
              shipped decisions when the safe move was to keep exploring.
            </p>

            <p className="mt-10">
              <a
                href="#selected-work"
                className="group inline-flex cursor-pointer items-center gap-2.5 text-sm font-medium"
              >
                <span className="border-b border-foreground pb-1.5 transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  See selected work
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  ↘
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
