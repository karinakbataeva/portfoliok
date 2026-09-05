import Reveal from "@/components/Reveal";

const FOCUS = [
  "Finding the problem before it’s named",
  "0 → 1 product decisions",
  "AI product evaluation",
  "User research that changes the roadmap",
  "Trade-offs, not features",
  "Working close enough to engineering to know what’s possible",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:gap-20">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,5.6vw,5.25rem)] leading-[1.02] [text-wrap:normal]">
              I like figuring out what&rsquo;s actually wrong before anyone
              agrees on{" "}
              <span className="text-accent italic">what to build.</span>
            </h2>
          </Reveal>

          <div>
            <Reveal stagger>
              <p className="text-muted">
                Most of my time goes into product decisions: talking to users,
                catching what they&rsquo;re not saying, and turning that into a
                real call.
              </p>
              <p className="mt-6 text-muted">
                I found a review-fraud problem hiding inside an access flow, ran
                AI model evaluations that changed which model a team should
                ship, and co-founded a delivery startup where every decision was
                a bet with real money behind it. Different industries, same
                instinct: start messy, find the system underneath.
              </p>
              <p className="mt-6 text-muted">
                The most useful work I&rsquo;ve done never fit one job title.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow">What I actually spend time on</p>
            </Reveal>

            <Reveal
              stagger
              as="ul"
              className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2"
            >
              {FOCUS.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <span aria-hidden="true" className="text-accent">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
