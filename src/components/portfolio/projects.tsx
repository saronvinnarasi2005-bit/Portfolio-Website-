import { useState, type ReactNode } from "react";
import { ArrowRight, X } from "lucide-react";
import { Chip, Modal, Reveal, Section, Tag } from "./primitives";
import { LoginFormMock, MemoryGameMock, StudentDashboardMock } from "./project-mockups";

type Project = {
  id: string;
  no: string;
  title: string;
  tech: string;
  description: string;
  tags: string[];
  filters: string[];
  mock: ReactNode;
  overview: string;
  challenge: string;
  features: string[];
};

const projects: Project[] = [
  {
    id: "memory",
    no: "01",
    title: "Memory Flip Card Game",
    tech: "HTML / CSS / JavaScript",
    description:
      "An interactive memory card game where players flip cards to find matching pairs. Matched cards earn points, unmatched cards return to their previous position, and a timer tracks the game.",
    tags: ["Interactive UI", "JavaScript", "Web Design"],
    filters: ["web", "uiux"],
    mock: <MemoryGameMock />,
    overview:
      "A browser-based memory game built to practise DOM manipulation, state handling and motion. Every flip, match and reset is expressed through a clear visual state.",
    challenge:
      "Communicating three card states — hidden, flipped and matched — without instructions, using only colour, elevation and timing.",
    features: [
      "Card flip animation with paired matching logic",
      "Live score and countdown timer",
      "Matched cards lock with an accent confirmation state",
      "Restart resets the board and score instantly",
    ],
  },
  {
    id: "sms",
    no: "02",
    title: "Student Management System",
    tech: "Java / MySQL",
    description:
      "A Java-based student management application for registering, updating, searching and deleting student records, integrated with MySQL for efficient data storage and retrieval.",
    tags: ["Java", "MySQL", "Dashboard UI"],
    filters: ["java", "database"],
    mock: <StudentDashboardMock />,
    overview:
      "A CRUD application for academic records with a dashboard-style overview, searchable table and connected MySQL storage.",
    challenge:
      "Keeping a data-dense table readable — clear row hierarchy, quiet action icons and an obvious primary action.",
    features: [
      "Register, update, search and delete student records",
      "Dashboard statistics for students and departments",
      "Search with row-level highlight feedback",
      "MySQL connection status indicator",
    ],
  },
  {
    id: "login",
    no: "03",
    title: "Login Form Website",
    tech: "HTML / CSS / JavaScript",
    description:
      "A responsive login interface designed with HTML, CSS and JavaScript, including user-friendly authentication fields and input validation.",
    tags: ["UI Design", "Responsive Design", "JavaScript"],
    filters: ["web", "uiux"],
    mock: <LoginFormMock />,
    overview:
      "A focused study in form design: every input state — empty, focused, invalid, valid and success — designed intentionally.",
    challenge:
      "Making validation feel helpful rather than punishing, with error text that appears close to the field it belongs to.",
    features: [
      "Email and password fields with show/hide toggle",
      "Focus state with accent ring and subtle glow",
      "Inline validation messaging",
      "Success confirmation before redirect",
    ],
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "uiux", label: "UI/UX" },
  { key: "java", label: "Java" },
  { key: "database", label: "Database" },
];

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Projects"
      title="Selected Projects"
      lead="Three builds where interface decisions mattered as much as the logic behind them. Open any card for the full case study."
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <Chip key={f.key} active={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.label}
            </Chip>
          ))}
          <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {projects.filter((p) => filter === "all" || p.filters.includes(filter)).length} shown
          </span>
        </div>
      </Reveal>

      <div className="mt-10 space-y-8">
        {projects.map((p, i) => {
          const match = filter === "all" || p.filters.includes(filter);
          return (
            <Reveal key={p.id} delay={i * 90}>
              <article
                className={`card-soft group overflow-hidden transition-all duration-500 ${
                  match
                    ? "opacity-100 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--shadow-lift)]"
                    : "pointer-events-none scale-[0.985] opacity-30 grayscale"
                }`}
              >
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border lg:aspect-auto lg:border-b-0 lg:border-r">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                      {p.mock}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between p-7 sm:p-9">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] tracking-[0.16em] text-primary">
                          PROJECT {p.no}
                        </span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {p.tech}
                      </p>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setOpen(p)}
                      className="focus-ring mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      View project
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} label={open?.title ?? "Project"}>
        {open && (
          <div>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-6 py-5 backdrop-blur sm:px-8">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Case study · Project {open.no}
                </p>
                <h3 className="mt-1.5 truncate font-display text-xl font-semibold text-ink sm:text-2xl">
                  {open.title}
                </h3>
              </div>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close case study"
                className="focus-ring grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-ink transition-colors hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-hidden border-b border-border">
              <div className="aspect-[16/10]">{open.mock}</div>
            </div>
            <div className="grid gap-8 px-6 py-8 sm:grid-cols-[1.3fr_1fr] sm:px-8">
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Overview</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink">{open.overview}</p>
                </div>
                <div>
                  <p className="eyebrow">Design challenge</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {open.challenge}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Technology</p>
                  <p className="mt-2 font-display text-[15px] text-ink">{open.tech}</p>
                </div>
                <div>
                  <p className="eyebrow">Key features</p>
                  <ul className="mt-3 space-y-2.5">
                    {open.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {open.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
