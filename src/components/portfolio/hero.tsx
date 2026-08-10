import { ArrowRight, Github, Linkedin, GraduationCap, Briefcase, FolderKanban, Award, BarChart3 } from "lucide-react";
import { Button, Counter, Reveal } from "./primitives";

const stats = [
  { value: 8.25, label: "MCA CGPA", icon: GraduationCap },
  { value: 8.5, label: "BCA CGPA", icon: BarChart3 },
  { value: 4, label: "Internship experiences", icon: Briefcase },
  { value: 3, label: "Projects shipped", icon: FolderKanban },
  { value: 10, suffix: "+" as string | undefined, label: "Certifications", icon: Award },
];

function HeroVisual() {
  return (
    <div className="group relative mx-auto aspect-[4/3.9] w-full max-w-[470px]">
      <div
        aria-hidden
        className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-primary/25 to-accent-2/20 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 -left-8 h-28 w-28 rotate-12 rounded-3xl border border-primary/25 animate-spin-slow"
      />

      {/* Browser window */}
      <div className="card-soft absolute left-0 top-2 w-[80%] overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-lift)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
          <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">
            saron.design / case-study
          </span>
        </div>
        <div className="grid-paper space-y-3 p-5">
          <div className="h-2.5 w-1/3 rounded-full bg-ink/80" />
          <div className="h-2 w-3/4 rounded-full bg-border" />
          <div className="h-2 w-2/3 rounded-full bg-border" />
          <div className="flex gap-2 pt-2">
            <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-primary/85 to-primary/55" />
            <div className="h-16 flex-1 rounded-xl border border-border bg-surface" />
            <div className="h-16 flex-1 rounded-xl bg-accent" />
          </div>
        </div>
      </div>

      {/* Mobile mockup */}
      <div className="card-soft absolute right-0 top-[22%] w-[34%] animate-float-slow overflow-hidden rounded-3xl p-3">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-border" />
        <div className="space-y-2">
          <div className="h-14 rounded-2xl bg-gradient-to-br from-accent-2/80 to-primary/60" />
          <div className="h-2 w-2/3 rounded-full bg-border" />
          <div className="h-2 w-1/2 rounded-full bg-border" />
          <div className="h-7 rounded-full bg-ink" />
        </div>
      </div>

      {/* Palette card */}
      <div className="card-soft absolute bottom-[8%] left-0 w-[46%] animate-float-fast p-4">
        <p className="eyebrow mb-3">Palette</p>
        <div className="flex gap-1.5">
          <span className="h-8 flex-1 rounded-lg bg-primary" />
          <span className="h-8 flex-1 rounded-lg bg-accent-2" />
          <span className="h-8 flex-1 rounded-lg bg-ink" />
          <span className="h-8 flex-1 rounded-lg border border-border bg-surface-2" />
        </div>
      </div>

      {/* Type card */}
      <div className="card-soft absolute bottom-0 right-[4%] w-[48%] p-4 transition-transform duration-500 group-hover:translate-y-1.5">
        <p className="eyebrow mb-1">Type</p>
        <p className="font-display text-2xl font-semibold leading-none text-ink">Aa</p>
        <p className="mt-1 font-mono text-[10px] text-muted-foreground">
          Space Grotesk / DM Sans
        </p>
      </div>

      {/* Hover labels */}
      <span className="pointer-events-none absolute right-[6%] top-[22%] rounded-full bg-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-background opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
        interactive
      </span>
      <span className="pointer-events-none absolute left-[8%] top-[54%] rounded-full bg-primary px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-primary-foreground opacity-0 transition-all duration-500 delay-75 group-hover:-translate-y-1 group-hover:opacity-100">
        components
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_20%_0%,oklch(0.52_0.21_275/0.10),transparent),radial-gradient(45%_45%_at_85%_10%,oklch(0.68_0.13_190/0.12),transparent)]"
      />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink shadow-[var(--shadow-soft)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-2" />
              </span>
              Available for opportunities
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-[4.4rem]">
              Hi, I&apos;m Saron
              <br />
              Vinnarasi V.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg leading-snug text-ink sm:text-2xl">
              I <span className="text-gradient font-medium">design, build and explore</span>{" "}
              digital experiences.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              I&apos;m an MCA student with a growing passion for UI/UX design, web designing,
              programming, data analytics and emerging technologies.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects">
                <Button size="lg" variant="primary">
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Let&apos;s connect
                </Button>
              </a>
              <div className="ml-1 flex items-center gap-2">
                <a
                  href="https://github.com/saronvinnarasi2005-bit"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saron-vinnarasi-v-2602b4416/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>

      <div className="shell relative mt-20 sm:mt-28">
        <Reveal>
          <div className="card-soft grid grid-cols-2 divide-border overflow-hidden sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="group border-b border-border p-6 lg:border-b-0">
                <s.icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix ?? ""} />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
