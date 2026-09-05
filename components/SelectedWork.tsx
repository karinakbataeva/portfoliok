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
    notionHref:
      "https://generated-surgeon-18b.notion.site/The-Staffroom-Product-Redesign-PRD-cb3e4bdb872e4e259138c592fbf09b2d?pvs=143",
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
              <div className="group flex w-full flex-col border border-border transition-colors duration-200 hover:border-foreground/30">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 cursor-pointer flex-col"
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

                {project.notionHref && (
                  <a
                    href={project.notionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/notion mb-7 flex w-fit items-center gap-2.5 self-start px-7 text-sm font-medium md:mb-8 md:px-8"
                  >
                    <span className="border-b border-foreground pb-1.5 transition-colors duration-200 group-hover/notion:border-accent group-hover/notion:text-accent">
                      See the full build
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover/notion:-translate-y-0.5 group-hover/notion:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
