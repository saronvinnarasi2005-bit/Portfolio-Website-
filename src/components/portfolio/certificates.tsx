import { useState } from "react";
import { Award, X, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Chip, Modal, Reveal, Section } from "./primitives";

type Cert = {
  title: string;
  org: string;
  date: string;
  category: "tech" | "ai" | "database" | "design" | "office";
};

const certs: Cert[] = [
  { title: "English Typewriting — Senior Grade", org: "Devi Institute", date: "Aug 2022", category: "office" },
  { title: "Tamil Typewriting — Senior Grade", org: "Devi Institute", date: "Aug 2024", category: "office" },
  { title: "Computer on Office Automation", org: "Office Automation", date: "Aug 2023", category: "office" },
  { title: "Junior Diploma in Microsoft Office", org: "Oviya Institute", date: "2019", category: "office" },
  { title: "Innoventia'25 — Working Model", org: "St. Antony's College", date: "2025", category: "tech" },
  { title: "Financial Literacy", org: "Yuwaah! Generation Unlimited", date: "12 Jan 2026", category: "tech" },
  { title: "Basics of Computer", org: "Bharat Institute of Technology", date: "Jul–Dec 2024", category: "tech" },
  { title: "Oracle Cloud Infrastructure", org: "Naan Mudhalvan", date: "17 Mar 2025", category: "tech" },
  { title: "Process Mining Fundamentals", org: "Celonis Academy", date: "4 Jul 2023", category: "database" },
  { title: "Microsoft Generative AI", org: "Learnathon", date: "17 Sep 2024", category: "ai" },
  { title: "Microsoft Fabric AI", org: "Learnathon", date: "19 Sep 2024", category: "ai" },
  { title: "MongoDB Basics for Students", org: "MongoDB", date: "18 Jul 2026", category: "database" },
  { title: "UI/UX Webinar", org: "Brand Monk Academy", date: "22 Jul 2026", category: "design" },
];

const filters = [
  { key: "all", label: "All" },
  { key: "tech", label: "Tech" },
  { key: "ai", label: "AI" },
  { key: "database", label: "Database" },
  { key: "design", label: "Design" },
  { key: "office", label: "Office" },
];

export function Certificates() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<Cert | null>(null);
  const visible = certs.filter((c) => filter === "all" || c.category === filter);

  return (
    <Section
      id="certificates"
      index="07"
      eyebrow="Certifications"
      title="Certification Wall"
      lead="Thirteen certifications across technology, AI, databases, design and office skills."
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <Chip key={f.key} active={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.label}
            </Chip>
          ))}
          <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {String(visible.length).padStart(2, "0")} certificates
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70}>
            <article className="card-soft group flex h-full flex-col p-6 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-4 w-4" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  {c.category}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[16px] font-semibold leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[13px] text-muted-foreground">{c.org}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {c.date}
              </p>
              <button
                onClick={() => setOpen(c)}
                className="focus-ring mt-6 inline-flex w-fit items-center gap-1.5 border-b border-transparent pb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                View certificate <ArrowUpRight className="h-3 w-3" />
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} label={open?.title ?? "Certificate"}>
        {open && (
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {open.category} certificate
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink sm:text-2xl">
                  {open.title}
                </h3>
              </div>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close certificate preview"
                className="focus-ring grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-ink transition-colors hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid-paper p-6 sm:p-10">
              <div className="mx-auto aspect-[4/3] w-full max-w-2xl rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-soft)]">
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border text-center">
                  <BadgeCheck className="h-9 w-9 text-primary" />
                  <p className="font-display text-lg font-semibold text-ink">{open.title}</p>
                  <p className="text-sm text-muted-foreground">{open.org}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Issued {open.date}
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">
                    Certificate preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
