import Image from "next/image";
import Reveal from "@/components/Reveal";
import staffRoom from "@/public/images/staffroom-profiles.png";
import bharatLens from "@/public/images/bharatlens-overview.png";
import workNest from "@/public/images/worknest-home.png";
import dmrc from "@/public/images/dmrc-placeholder.png";

const PROJECTS = [
  {
    index: "01",
    href: "/work/the-staff-room",
    title: "The Staff Room",
    blurb:
      "Fixing a trust problem hidden inside an access flow, then redesigning how casual browsers, contributors, and ambassadors participate.",
    image: staffRoom,
    alt: "Staff Room casual browser and teacher profile wireframes",
    notionHref:
      "https://generated-surgeon-18b.notion.site/The-Staffroom-Product-Redesign-PRD-cb3e4bdb872e4e259138c592fbf09b2d?pvs=143",
  },
  {
    index: "04",
    href: "https://drive.google.com/file/d/1iZ0T2BXsyRqfrSs8wmYWODTFPB1LGUkb/view?usp=sharing",
    title: "DMRC",
    blurb:
      "Redesigning metro passenger information to make the right information available at the right moment.",
    image: dmrc,
    alt: "Delhi Metro train at a station",
  },
  {
    index: "03",
    href: "/work/worknest",
    title: "WorkNest",
    blurb:
      "Building a productivity system that helps users organize workspaces, tabs, notes, and focus sessions.",
    image: workNest,
    alt: "WorkNest productivity workspace",
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
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-accent">Selected work</p>

          <h2 className="mt-10 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
            A few problems I’ve worked on
          </h2>
        </Reveal>

        <Reveal
          stagger
          as="ul"
          className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <li key={project.index} className="flex">
              <div className="group flex w-full flex-col border border-border transition-colors duration-200 hover:border-foreground/30">
                <div className="overflow-hidden bg-card">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                      project.index === "04"
                        ? "object-center"
                        : "object-top"
                    }`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-[clamp(1.5rem,2.1vw,2.1rem)] transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-4 flex-1 text-muted">{project.blurb}</p>

                  <div className="mt-8 flex items-center gap-4 text-sm font-medium">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5"
                    >
                      <span className="border-b border-foreground pb-1.5 transition-colors duration-200 hover:border-accent hover:text-accent">
                        View case study
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>

                    {project.notionHref && (
                      <a
                        href={project.notionHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5"
                      >
                        <span className="border-b border-foreground pb-1.5 transition-colors duration-200 hover:border-accent hover:text-accent">
                          See the full build
                        </span>
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
