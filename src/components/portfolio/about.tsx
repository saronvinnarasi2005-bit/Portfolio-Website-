import { useState } from "react";
import { ChevronDown, GraduationCap, Sparkle } from "lucide-react";
import { Button, Reveal, Section, Tag, useInView } from "./primitives";
import { cn } from "@/lib/utils";

const education = [
  {
    years: "2025 — 2027",
    degree: "Master of Computer Applications",
    school: "Holy Cross College, Trichy",
    cgpa: "8.25",
    detail: "Focus on advanced programming, data analytics, database systems and design thinking.",
  },
  {
    years: "2022 — 2025",
    degree: "Bachelor of Computer Applications",
    school: "St. Antony's College",
    cgpa: "8.5",
    detail: "Major subject rank holder in 1st and 2nd year. Foundation in web and software development.",
  },
];

export function About() {
  const [expanded, setExpanded] = useState(false);
  const { ref, seen } = useInView<HTMLDivElement>(0.2);

  return (
    <Section
      id="about"
      index="02"
      eyebrow="About"
      title="Behind the Interface"
      lead="A short look at who I am, what I study and the directions I'm currently exploring."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <div className="card-soft p-7 sm:p-9">
            <p className="text-[17px] leading-relaxed text-ink">
              Saron Vinnarasi V is currently pursuing a Master of Computer Applications at Holy
              Cross College, Trichy. She completed her Bachelor of Computer Applications at St.
              Antony&apos;s College with a CGPA of 8.5. Her interests include UI/UX design, web
              designing, programming, data analytics, prompting and emerging technologies.
            </p>

            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500 ease-out",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0">
                <div className="mt-6 space-y-4 border-t border-border pt-6 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    Beyond coursework, I spend time studying interfaces — how layout, spacing and
                    type change the way a product feels. I sketch screens, rebuild components and
                    try to understand the reasoning behind good design decisions.
                  </p>
                  <p>
                    I&apos;ve completed four internships across hardware troubleshooting, sensor
                    technology, Power BI &amp; data analytics and prompting, plus workshops in
                    Generative AI, Java Selenium and MERN stack development.
                  </p>
                  <p>
                    Outside academics I serve as IKS Club Vice President, worked as a back-end
                    specialist for the Social Media Club, and organised the college Web Fest.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="mt-7"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Show less" : "More about me"}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")}
              />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-soft overflow-hidden">
            <div className="relative border-b border-border bg-gradient-to-br from-primary/12 via-surface to-accent-2/12 p-7">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-ink font-display text-xl font-bold text-background">
                SV
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                Saron Vinnarasi V
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">MCA Student</p>
              <p className="text-sm text-muted-foreground">Holy Cross College, Trichy</p>
            </div>
            <div className="p-7">
              <p className="eyebrow flex items-center gap-2">
                <Sparkle className="h-3.5 w-3.5 text-primary" /> Currently exploring
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["UI/UX", "Generative AI", "Web Design", "Data Analytics"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-[13px] text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Education timeline */}
      <div ref={ref} className="mt-20">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Academic timeline
          </h3>
        </Reveal>
        <div className="relative mt-10 pl-8 sm:pl-12">
          <span className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[15px]" />
          <span
            className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-primary to-accent-2 transition-transform duration-1000 sm:left-[15px]"
            style={{ height: "calc(100% - 1rem)", transform: `scaleY(${seen ? 1 : 0})` }}
          />
          <div className="space-y-6">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 120}>
                <div className="relative">
                  <span className="absolute -left-8 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background sm:-left-12">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <article className="card-soft group p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)] sm:p-7">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                          {e.years}
                        </p>
                        <h4 className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                          {e.degree}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <div className="text-right">
                          <p className="font-display text-xl font-semibold text-ink">{e.cgpa}</p>
                          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                            CGPA
                          </p>
                        </div>
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                          <GraduationCap className="h-4 w-4" />
                        </span>
                      </div>
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
        <div className="mt-8 flex flex-wrap gap-2">
          <Tag>Holy Cross College</Tag>
          <Tag>St. Antony&apos;s College</Tag>
          <Tag>Rank holder</Tag>
        </div>
      </div>
    </Section>
  );
}
