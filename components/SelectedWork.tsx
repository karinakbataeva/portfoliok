import Image from "next/image";
import Reveal from "@/components/Reveal";
import staffRoom from "@/public/images/staffroom-profiles.png";
import bharatLens from "@/public/images/bharatlens-overview.png";
import workNest from "@/public/images/worknest-home.png";

const PROJECTS = [
  {
    index: "01",
    href: "/work/the-staff-room",
    title: "The Staff Room",
    blurb:
      "Fixing a trust problem hidden inside an access flow, then redesigning how casual browsers, contributors, and ambassadors participate.",
    image: staffRoom,
    alt: "The Staff Room casual browser and teacher profile wireframes",
  },
  {
    index: "02",
    href: "/work/bharatlens",
    title: "BharatLens",
    blurb:
      "Making AI image model evaluation easier to understand through clearer data, comparisons, and insights.",
    image: bharatLens,
    alt: "BharatLens evaluation dashboard preview",
  },
  {
    index: "03",
    href: "/work/worknest",
    title: "WorkNest",
    blurb:
      "Building a productivity system that helps users organize workspaces, tabs, notes, and focus sessions.",
    image: workNest,
    alt: "WorkNest dashboard preview",
  },
];

export default function SelectedWork() {
  return (
    <section id="selected-work" className="scroll-mt-28 py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <p className="eyebrow">Selected work</p>
            <p className="max-w-xs text-muted md:text-right">
              Product thinking, interface design, and working software.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mt-10 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] [text-wrap:normal]">
            Three ways to make
            <br />
            <span className="text-accent italic">
              complex things useful.
            </span>
          </h2>
        </Reveal>

        <Reveal stagger as="ul" className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.index} className="flex">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full cursor-pointer flex-col border border-border transition-colors duration-200 hover:border-foreground/30"
              >
                <div className="overflow-hidden bg-card">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow text-accent">{project.index}</span>
                    <h3 className="text-[clamp(1.5rem,2.1vw,2.1rem)] transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-4 flex-1 text-muted">{project.blurb}</p>

                  <p className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium">
                    <span className="border-b border-foreground pb-1.5 transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                      View case study
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </Reveal>

        <Reveal>
          <a
            href="https://generated-surgeon-18b.notion.site/The-Staffroom-Product-Redesign-PRD-cb3e4bdb872e4e259138c592fbf09b2d?pvs=143"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex flex-col overflow-hidden border border-border transition-colors duration-200 hover:border-foreground/30 md:mt-8"
          >
            <div className="overflow-hidden bg-card">
              <Image
                src={staffRoom}
                alt="The Staff Room product redesign PRD preview"
                sizes="100vw"
                className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] md:h-80"
              />
            </div>

            <div className="flex flex-col gap-3 p-7 md:p-8">
              <p className="text-sm text-muted">
                Product & Engineering · Full PRD walkthrough
              </p>
              <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] transition-colors duration-200 group-hover:text-accent">
                The Staff Room — Product Redesign PRD
              </h3>
              <p className="max-w-2xl text-muted">
                The full write-up behind the access-flow fix: the trust
                problem, the trade-offs, and the redesigned Casual browser, Teacher,
                and Ambassador experiences — documented end to end in Notion.
              </p>

              <span className="mt-4 inline-flex w-fit items-center gap-2.5 border border-border px-5 py-3 text-sm font-medium transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                See the full build
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  →
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
