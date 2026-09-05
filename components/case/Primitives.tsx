import Image, { type StaticImageData } from "next/image";
import Reveal from "@/components/Reveal";

export function SectionLabel({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      <span className="text-accent">{num}</span>
      <span className="mx-2 text-border">/</span>
      {children}
    </p>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseHeader({
  index,
  kicker,
  title,
  deck,
  tags,
  outcome,
}: {
  index: string;
  kicker: string;
  title: string;
  deck: React.ReactNode;
  tags: string[];
  outcome: React.ReactNode;
}) {
  return (
    <Reveal stagger className="max-w-4xl">
      <p className="eyebrow">
        <span className="text-accent">{index}</span>
        <span className="mx-2 text-border">/</span>
        {kicker}
      </p>
      <h2 className="mt-6 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] [text-wrap:normal]">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{deck}</p>
      <div className="mt-8">
        <Chips items={tags} />
      </div>
      <div className="mt-10 border-l-2 border-accent bg-accent-soft/60 py-5 pl-6">
        <p className="eyebrow text-accent">Outcome</p>
        <p className="mt-2 max-w-2xl">{outcome}</p>
      </div>
    </Reveal>
  );
}

export function Block({
  num,
  label,
  title,
  children,
}: {
  num: string;
  label: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Reveal
      as="section"
      stagger
      className="rule-top grid gap-8 pt-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-14"
    >
      <div>
        <SectionLabel num={num}>{label}</SectionLabel>
      </div>
      <div className="max-w-2xl">
        {title ? (
          <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.06]">{title}</h3>
        ) : null}
        {children ? <div className="mt-5 space-y-5">{children}</div> : null}
      </div>
    </Reveal>
  );
}

export function Shot({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  // Never scale a screenshot past its natural width, and never past 800px —
  // these are UI captures, and upscaling them just makes them look soft.
  const maxWidth = Math.min(src.width, 800);

  return (
    <Reveal as="figure" className="mx-auto mt-12" style={{ maxWidth }}>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          sizes={`(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`}
          className="block h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </Reveal>
  );
}

export function StatRow({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <Reveal
      stagger
      className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
    >
      {items.map((item) => (
        <div key={item.label}>
          <p className="font-display text-[clamp(2rem,4vw,3rem)] leading-none">
            {item.value}
          </p>
          <p className="mt-3 text-sm text-muted">{item.label}</p>
        </div>
      ))}
    </Reveal>
  );
}

export function DecisionList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <Reveal stagger as="ul" className="grid gap-px bg-border md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="bg-background p-7">
          <p className="font-display text-xl">{item.title}</p>
          <p className="mt-3 text-muted">{item.body}</p>
        </li>
      ))}
    </Reveal>
  );
}

export function MeasureList({
  items,
}: {
  items: { name: string; body: string }[];
}) {
  return (
    <Reveal stagger as="ul" className="mt-8">
      {items.map((item) => (
        <li
          key={item.name}
          className="rule-top grid gap-2 py-6 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-14"
        >
          <p className="font-display text-lg">{item.name}</p>
          <p className="max-w-2xl text-muted">{item.body}</p>
        </li>
      ))}
    </Reveal>
  );
}

export function CaseNav({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <div className="rule-top mt-20 flex items-center justify-between gap-6 pt-8 text-sm">
      {prev ? (
        <a
          href={prev.href}
          className="group inline-flex min-h-11 cursor-pointer items-center gap-2 font-medium"
        >
          <span aria-hidden="true">←</span>
          <span className="border-b border-foreground pb-1 transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
            {prev.label}
          </span>
        </a>
      ) : (
        <span />
      )}
      <a
        href="/#selected-work"
        className="inline-flex min-h-11 cursor-pointer items-center text-muted transition-colors duration-200 hover:text-accent"
      >
        All work
      </a>
      {next ? (
        <a
          href={next.href}
          className="group inline-flex min-h-11 cursor-pointer items-center gap-2 font-medium"
        >
          <span className="border-b border-foreground pb-1 transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
            {next.label}
          </span>
          <span aria-hidden="true">→</span>
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}

export function PullQuote({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal stagger className="rule-top py-14 md:py-20">
      <p className="eyebrow">{label}</p>
      <p className="mt-6 max-w-4xl font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.08] tracking-tight">
        {children}
      </p>
    </Reveal>
  );
}

export function RoleCards({
  items,
}: {
  items: { index: string; title: string; body: string }[];
}) {
  return (
    <Reveal stagger as="ul" className="grid gap-px bg-border md:grid-cols-3">
      {items.map((item) => (
        <li key={item.index} className="bg-background p-7">
          <p className="eyebrow text-accent">{item.index}</p>
          <p className="mt-4 font-display text-xl">{item.title}</p>
          <p className="mt-3 text-muted">{item.body}</p>
        </li>
      ))}
    </Reveal>
  );
}
