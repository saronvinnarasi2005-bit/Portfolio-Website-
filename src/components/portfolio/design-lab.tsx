import { useState } from "react";
import { ChevronDown, Loader2, Search, Star, Type, Grid3x3, MousePointerClick } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { cn } from "@/lib/utils";

const journey = [
  {
    year: "2023",
    items: ["Process Mining", "Hardware & Troubleshooting"],
    note: "First exposure to systems thinking and hands-on hardware diagnostics.",
  },
  {
    year: "2024",
    items: ["Java", "Generative AI", "Microsoft Fabric AI", "Web & Technical Learning"],
    note: "Programming foundations plus early AI coursework and web experiments.",
  },
  {
    year: "2025",
    items: ["BCA Completed", "Sensor Technology", "Oracle Cloud"],
    note: "Graduated BCA at 8.5 CGPA and moved into cloud and sensor work.",
  },
  {
    year: "2026",
    items: [
      "MCA",
      "Power BI",
      "Data Analytics",
      "MongoDB",
      "UI/UX",
      "Prompting",
      "MERN Stack",
    ],
    note: "Analytics, databases and a serious turn toward interface design.",
  },
];

function MiniSystem() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="card-soft p-5">
        <p className="eyebrow">Color</p>
        <div className="mt-3 flex gap-1.5">
          <span className="h-9 flex-1 rounded-lg bg-primary" />
          <span className="h-9 flex-1 rounded-lg bg-accent-2" />
          <span className="h-9 flex-1 rounded-lg bg-ink" />
          <span className="h-9 flex-1 rounded-lg border border-border bg-surface-2" />
        </div>
      </div>
      <div className="card-soft p-5">
        <p className="eyebrow flex items-center gap-1.5">
          <Type className="h-3 w-3" /> Type
        </p>
        <p className="mt-2 font-display text-xl font-semibold leading-tight text-ink">Heading</p>
        <p className="text-[13px] text-muted-foreground">Body copy stays quiet and legible.</p>
      </div>
      <div className="card-soft p-5">
        <p className="eyebrow">Buttons</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-ink px-3.5 py-1.5 text-[11px] text-background">
            Primary
          </span>
          <span className="rounded-full border border-border px-3.5 py-1.5 text-[11px] text-ink">
            Secondary
          </span>
        </div>
      </div>
      <div className="card-soft p-5">
        <p className="eyebrow">Card</p>
        <div className="mt-3 rounded-xl border border-border p-3">
          <div className="h-10 rounded-lg bg-gradient-to-br from-primary/70 to-accent-2/60" />
          <div className="mt-2 h-1.5 w-2/3 rounded-full bg-border" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-border" />
        </div>
      </div>
      <div className="card-soft p-5">
        <p className="eyebrow">Input</p>
        <div className="mt-3 rounded-lg border border-primary px-3 py-2 text-[12px] text-ink shadow-[0_0_0_3px_oklch(0.52_0.21_275/0.14)]">
          Focused field
        </div>
      </div>
      <div className="card-soft p-5">
        <p className="eyebrow flex items-center gap-1.5">
          <Grid3x3 className="h-3 w-3" /> Grid · 8px
        </p>
        <div className="grid-paper mt-3 h-[52px] rounded-lg border border-border" />
      </div>
      <div className="card-soft p-5 sm:col-span-2">
        <p className="eyebrow">Icons</p>
        <div className="mt-3 flex gap-2.5 text-muted-foreground">
          {[Search, Star, Type, Grid3x3, MousePointerClick].map((Icon, i) => (
            <span
              key={i}
              className="grid h-9 w-9 place-items-center rounded-xl border border-border transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Playground() {
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState("violet");
  const themes: Record<string, string> = {
    violet: "bg-primary",
    teal: "bg-accent-2",
    ink: "bg-ink",
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div className="card-soft p-6">
        <p className="eyebrow">Button hover</p>
        <button className="focus-ring group relative mt-4 w-full overflow-hidden rounded-full bg-ink px-5 py-3 text-sm text-background">
          <span className="relative z-10">Hover me</span>
          <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-400 group-hover:translate-y-0" />
        </button>
      </div>

      <div className="card-soft p-6">
        <p className="eyebrow">Toggle</p>
        <button
          onClick={() => setToggle((v) => !v)}
          role="switch"
          aria-checked={toggle}
          aria-label="Demo toggle"
          className={cn(
            "focus-ring mt-4 flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300",
            toggle ? "bg-primary" : "bg-border",
          )}
        >
          <span
            className={cn(
              "h-6 w-6 rounded-full bg-surface shadow-[var(--shadow-soft)] transition-transform duration-300",
              toggle && "translate-x-6",
            )}
          />
        </button>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {toggle ? "On" : "Off"}
        </p>
      </div>

      <div className="card-soft p-6">
        <p className="eyebrow">Theme selector</p>
        <div className="mt-4 flex gap-2">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              aria-label={`Theme ${t}`}
              className={cn(
                "focus-ring h-9 w-9 rounded-full transition-all duration-300",
                themes[t],
                theme === t ? "ring-2 ring-ink ring-offset-2 ring-offset-surface" : "opacity-60",
              )}
            />
          ))}
        </div>
        <div className={cn("mt-4 h-2 rounded-full transition-colors duration-500", themes[theme])} />
      </div>

      <div className="card-soft group overflow-hidden p-6 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
        <p className="eyebrow">Animated card</p>
        <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-primary/80 to-accent-2/70 transition-transform duration-500 group-hover:scale-[1.04]" />
      </div>

      <div className="card-soft p-6">
        <p className="eyebrow">Input field</p>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-[13px] text-muted-foreground transition-all duration-300 focus-within:border-primary focus-within:shadow-[0_0_0_3px_oklch(0.52_0.21_275/0.14)]">
          <Search className="h-3.5 w-3.5" />
          <input
            className="w-full bg-transparent text-ink outline-none placeholder:text-muted-foreground"
            placeholder="Try typing…"
          />
        </div>
      </div>

      <div className="card-soft p-6">
        <p className="eyebrow">Mini dashboard</p>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {[40, 65, 30, 80, 55, 95, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-md bg-primary/25 transition-all duration-500 hover:bg-primary"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="card-soft p-6">
        <p className="eyebrow">Loading</p>
        <div className="mt-4 flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
            <span
              className="block h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent-2"
              style={{ animation: "float-fast 2.4s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      <div className="card-soft p-6">
        <p className="eyebrow">Palette</p>
        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {["bg-primary", "bg-accent-2", "bg-ink", "bg-accent"].map((c) => (
            <span key={c} className={cn("h-12 rounded-lg transition-transform duration-300 hover:-translate-y-1", c)} />
          ))}
        </div>
      </div>

      <div className="card-soft flex items-center p-6">
        <p className="font-display text-[15px] leading-snug text-muted-foreground">
          Exploring interactions, components and visual systems.
        </p>
      </div>
    </div>
  );
}

export function DesignLab() {
  const [openYear, setOpenYear] = useState<string | null>("2026");

  return (
    <>
      <Section
        eyebrow="Design intent"
        title="Why I'm Exploring UI/UX"
        lead="I enjoy transforming ideas into clean, intuitive and visually engaging digital interfaces. I'm interested in understanding how users interact with products and how thoughtful design can make technology easier and more enjoyable to use."
        tone="raised"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="card-soft grid-paper flex h-full flex-col justify-between p-7">
              <div>
                <p className="eyebrow">The workspace</p>
                <p className="mt-4 text-[17px] leading-relaxed text-ink">
                  A design system is where curiosity becomes consistency — colour, type, spacing
                  and components that behave the same way everywhere.
                </p>
              </div>
              <div className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <p>· 8px spacing rhythm</p>
                <p>· One accent, many states</p>
                <p>· Motion under 400ms</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <MiniSystem />
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Playground"
        title="A Little Design Playground"
        lead="Small interactive components built to study states, feedback and timing. Everything here is live — try it."
      >
        <Reveal>
          <Playground />
        </Reveal>
      </Section>

      <Section
        eyebrow="Learning journey"
        title="Year by Year"
        lead="Expand a year to see the courses, internships and skills from that period."
        tone="raised"
      >
        <div className="space-y-3">
          {journey.map((y, i) => {
            const isOpen = openYear === y.year;
            return (
              <Reveal key={y.year} delay={i * 80}>
                <div
                  className={cn(
                    "card-soft overflow-hidden",
                    isOpen && "border-primary/40 shadow-[var(--shadow-lift)]",
                  )}
                >
                  <button
                    onClick={() => setOpenYear(isOpen ? null : y.year)}
                    aria-expanded={isOpen}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="flex min-w-0 items-baseline gap-4">
                      <span
                        className={cn(
                          "font-display text-2xl font-semibold transition-colors duration-300 sm:text-3xl",
                          isOpen ? "text-primary" : "text-ink",
                        )}
                      >
                        {y.year}
                      </span>
                      <span className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {y.items.length} milestones
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-primary",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-500",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0">
                      <div className="border-t border-border px-6 py-5 sm:px-7">
                        <div className="flex flex-wrap gap-2">
                          {y.items.map((it) => (
                            <span
                              key={it}
                              className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-[13px] text-ink"
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {y.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
