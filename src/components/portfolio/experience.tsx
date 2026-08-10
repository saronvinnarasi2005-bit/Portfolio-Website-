import { ArrowUpRight, Cpu, Wrench, BarChart3, Sparkles, Brain, Code2, Layers } from "lucide-react";
import { Reveal, Section, useInView } from "./primitives";

const experiences = [
  {
    org: "Gandhigram Institute",
    role: "Hardware & Troubleshooting",
    date: "13 Dec 2023 – 23 Dec 2023",
    icon: Wrench,
    detail: "Hands-on diagnostics, assembly and fault isolation on desktop systems.",
  },
  {
    org: "IICT",
    role: "Sensor Technology",
    date: "1 Sep 2025 – 10 Sep 2025",
    icon: Cpu,
    detail: "Worked with sensor modules, signal reading and embedded interfacing basics.",
  },
  {
    org: "T4TEQ",
    role: "Power BI & Data Analytics",
    date: "2 Feb 2026 – 11 Feb 2026",
    icon: BarChart3,
    detail: "Built dashboards, cleaned datasets and practised visual data storytelling.",
  },
  {
    org: "Ailaysa",
    role: "Prompting",
    date: "5 Aug 2026 – 5 Sep 2026",
    icon: Sparkles,
    detail: "Prompt design and evaluation for language workflows. Current placement.",
    current: true,
  },
];

const workshops = [
  { title: "Next Gen AI", place: "St. Joseph College", meta: "2 Days", icon: Brain },
  { title: "Java Selenium", place: "St. Antony's College", meta: "10 Days", icon: Code2 },
  {
    title: "MERN Stack Development",
    place: "Jamal Mohammed College",
    meta: "29–30 June 2026",
    icon: Layers,
  },
];

export function Experience() {
  const { ref, seen } = useInView<HTMLDivElement>(0.15);

  return (
    <Section
      id="experience"
      index="05"
      eyebrow="Experience"
      title="Internships & Training"
      lead="Four internships across hardware, sensors, analytics and AI prompting — plus workshops that pushed my technical range."
      tone="raised"
    >
      <div ref={ref} className="relative pl-8 sm:pl-12">
        <span className="absolute left-[7px] top-3 h-[calc(100%-1.5rem)] w-px bg-border sm:left-[15px]" />
        <span
          className="absolute left-[7px] top-3 w-px origin-top bg-gradient-to-b from-primary via-primary to-accent-2 transition-transform duration-1500 sm:left-[15px]"
          style={{ height: "calc(100% - 1.5rem)", transform: `scaleY(${seen ? 1 : 0})` }}
        />
        <div className="space-y-5">
          {experiences.map((e, i) => (
            <Reveal key={e.org} delay={i * 110}>
              <div className="relative">
                <span
                  className={`absolute -left-8 top-7 grid h-4 w-4 place-items-center rounded-full border-2 bg-background sm:-left-12 ${
                    e.current ? "border-accent-2" : "border-primary"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${e.current ? "animate-pulse bg-accent-2" : "bg-primary"}`}
                  />
                </span>
                <article className="card-soft group p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)] sm:p-7">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                          {e.org}
                        </h3>
                        {e.current && (
                          <span className="rounded-full bg-accent-2/15 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-2">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-primary">{e.role}</p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {e.date}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <e.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="grid grid-rows-[0fr] overflow-hidden opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="min-h-0">
                      <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                        {e.detail}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Reveal>
          <p className="eyebrow">Workshops</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Short intensives
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <article className="card-soft group relative overflow-hidden p-6 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent-2 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-surface-2 text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-background">
                  <w.icon className="h-4 w-4" />
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold text-ink">{w.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{w.place}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  {w.meta}
                </p>
                <span className="mt-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground opacity-0 transition-all duration-400 group-hover:opacity-100">
                  View details <ArrowUpRight className="h-3 w-3" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
