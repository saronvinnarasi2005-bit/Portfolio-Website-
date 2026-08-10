import { useState } from "react";
import { Code2, Database, Globe, LineChart, FileText, Palette } from "lucide-react";
import { Chip, Reveal, Section } from "./primitives";

const categories = [
  {
    key: "programming",
    name: "Programming",
    icon: Code2,
    blurb: "Core languages I use for building logic, applications and academic projects.",
    items: ["Python", "Java"],
  },
  {
    key: "database",
    name: "Database",
    icon: Database,
    blurb: "Designing schemas, writing queries and connecting data to applications.",
    items: ["MySQL", "PL/SQL"],
  },
  {
    key: "web",
    name: "Web",
    icon: Globe,
    blurb: "Building responsive, interactive interfaces for the browser.",
    items: ["HTML", "CSS", "JavaScript", "Web Designing"],
  },
  {
    key: "data",
    name: "Data & Analytics",
    icon: LineChart,
    blurb: "Turning raw data into dashboards and readable insight.",
    items: ["Power BI", "Data Analytics"],
  },
  {
    key: "productivity",
    name: "Productivity",
    icon: FileText,
    blurb: "Documentation, reporting and day-to-day office workflows.",
    items: ["Microsoft Office", "OpenOffice"],
  },
  {
    key: "design",
    name: "Design Interest",
    icon: Palette,
    blurb: "Where my curiosity is strongest — interfaces, flows and visual systems.",
    items: [
      "UI/UX Design",
      "Responsive Web Design",
      "Interface Design",
      "Prototyping",
      "Visual Design",
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState("design");
  const current = categories.find((c) => c.key === active)!;

  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Tools I Work With"
      lead="Pick a category to see the tools, languages and design practices behind it."
      tone="raised"
    >
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c.key} active={active === c.key} onClick={() => setActive(c.key)}>
              {c.name}
            </Chip>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="card-soft flex flex-col justify-between p-7">
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <current.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{current.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.blurb}</p>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {String(current.items.length).padStart(2, "0")} tools
            </p>
          </div>

          <div key={active} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {current.items.map((item, i) => (
              <div
                key={item}
                className="card-soft group flex items-center justify-between gap-3 p-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]"
                style={{ animation: `rise 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms both` }}
              >
                <span className="font-display text-[15px] font-medium text-ink">{item}</span>
                <span className="font-mono text-[10px] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-10 flex flex-wrap gap-2 opacity-70">
          {categories
            .filter((c) => c.key !== active)
            .flatMap((c) => c.items)
            .map((i) => (
              <span
                key={i}
                className="rounded-full border border-border px-3 py-1.5 text-[12px] text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-ink"
              >
                {i}
              </span>
            ))}
        </div>
      </Reveal>
    </Section>
  );
}
