import { Award, Crown, Users, Trophy, CalendarDays, Presentation, FileText, Heart, BookOpen, Database, Code2, Building2 } from "lucide-react";
import { Reveal, Section } from "./primitives";

const achievements = [
  { title: "Major Subject Rank Holder", org: "St. Antony's College", meta: "1st Year & 2nd Year", icon: Crown },
  { title: "IKS Club Vice President", org: "Holy Cross College", meta: "2026–2027", icon: Users },
  { title: "Social Media Club", org: "Holy Cross College", meta: "Back End Specialist · 2025–2026", icon: Users },
  { title: "Indoor Bowling — 2nd Place", org: "Holy Cross College", meta: "2026", icon: Trophy },
  { title: "Web Fest Programme", org: "Organized by Holy Cross College", meta: "2026", icon: CalendarDays },
  { title: "Paper Presentation", org: "St. Joseph College", meta: "30 July 2025", icon: Presentation },
  { title: "Article Published", org: "Sri Adi Chunchanagiri Women's College, Cumbum", meta: "19 Aug 2024", icon: FileText },
  { title: "Best Listener Award", org: "St. Antony's College", meta: "Recognition", icon: Heart },
  { title: "NPTEL — Programming in Java", org: "NPTEL", meta: "Jul–Oct 2024 · 52%", icon: Code2 },
  { title: "NPTEL — Database Management System", org: "NPTEL", meta: "Jan–Mar 2026 · 76% Elite", icon: Database },
  { title: "ASP.NET Course", org: "Council for Vocational Education and Skill Development", meta: "10 June 2024", icon: BookOpen },
];

const leadership = [
  { title: "IKS Club", role: "Vice President", place: "Holy Cross College", date: "2026–2027", icon: Crown },
  { title: "Social Media Club", role: "Back End Specialist", place: "Holy Cross College", date: "2025–2026", icon: Users },
  { title: "Web Fest", role: "Programme Organizer", place: "Holy Cross College", date: "2026", icon: CalendarDays },
  { title: "Industrial Visit", role: "Ailaysa Company", place: "TICEL Park, Chennai", date: "28 July 2026", icon: Building2 },
];

export function Achievements() {
  return (
    <>
      <Section
        id="achievements"
        index="06"
        eyebrow="Achievements"
        title="Recognition & Milestones"
        lead="Academic rankings, club leadership, competitions and coursework worth noting."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80}>
              <article className="card-soft group relative h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/8 transition-transform duration-500 group-hover:scale-150"
                />
                <span className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-2 text-primary">
                  <a.icon className="h-4 w-4" />
                </span>
                <h3 className="relative mt-5 font-display text-[17px] font-semibold leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="relative mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {a.org}
                </p>
                <p className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  {a.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Leadership & activities"
        title="Beyond the Classroom"
        lead="Roles, events and visits that shaped how I work with people and teams."
        tone="raised"
      >
        <div className="relative">
          <span className="absolute left-0 top-[38px] hidden h-px w-full bg-border lg:block" />
          <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {leadership.map((l, i) => (
              <Reveal key={l.title} delay={i * 100} className="min-w-[74%] snap-start sm:min-w-[46%] lg:min-w-0">
                <div className="relative h-full">
                  <span className="relative z-10 mb-6 hidden h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background lg:grid">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <article className="card-soft group h-full p-6 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <l.icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">{l.title}</h3>
                    <p className="mt-1 text-sm text-primary">{l.role}</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">{l.place}</p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {l.date}
                    </p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:hidden">
          <Award className="h-3 w-3" /> Swipe to explore
        </p>
      </Section>
    </>
  );
}
