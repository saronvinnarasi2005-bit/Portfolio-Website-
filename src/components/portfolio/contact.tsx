import { useState } from "react";
import { ArrowRight, Check, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button, Reveal, Section, SECTIONS } from "./primitives";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "subject" | "message";

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (f: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [f]: e.target.value }));
    setErrors((p) => ({ ...p, [f]: undefined }));
    setSent(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Add a short subject.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", subject: "", message: "" });
    }
  };

  const fieldClass = (f: Field) =>
    cn(
      "w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-ink outline-none transition-all duration-300 placeholder:text-muted-foreground/70",
      errors[f]
        ? "border-destructive focus:shadow-[0_0_0_3px_oklch(0.577_0.245_27.325/0.16)]"
        : "border-border focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.52_0.21_275/0.14)]",
    );

  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's create something meaningful."
      lead="I'm open to learning opportunities, collaborations, internships, projects and conversations around technology and design."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            <a
              href="tel:9626858787"
              className="card-soft group flex items-center gap-4 p-6 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">Mobile</span>
                <span className="mt-0.5 block truncate font-display text-[17px] text-ink">
                  9626858787
                </span>
              </span>
            </a>
            <a
              href="mailto:saronvinnarasi2005@gmail.com"
              className="card-soft group flex items-center gap-4 p-6 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">Email</span>
                <span className="mt-0.5 block truncate font-display text-[15px] text-ink">
                  saronvinnarasi2005@gmail.com
                </span>
              </span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/saronvinnarasi2005-bit"
                target="_blank"
                rel="noreferrer"
                className="card-soft group flex flex-col gap-3 p-6 hover:-translate-y-1 hover:border-primary/40"
              >
                <Github className="h-5 w-5 text-ink transition-colors duration-300 group-hover:text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/saron-vinnarasi-v-2602b4416/"
                target="_blank"
                rel="noreferrer"
                className="card-soft group flex flex-col gap-3 p-6 hover:-translate-y-1 hover:border-primary/40"
              >
                <Linkedin className="h-5 w-5 text-ink transition-colors duration-300 group-hover:text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  LinkedIn
                </span>
              </a>
            </div>

            <a href="mailto:saronvinnarasi2005@gmail.com" className="mt-auto block">
              <Button variant="accent" size="lg" className="w-full py-5 text-base">
                Let&apos;s connect
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={submit} noValidate className="card-soft p-7 sm:p-9">
            <p className="eyebrow">Send a message</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-[13px] text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={set("name")}
                  className={fieldClass("name")}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-[12px] text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[13px] text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={set("email")}
                  className={fieldClass("email")}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-[12px] text-destructive">{errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-[13px] text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  value={values.subject}
                  onChange={set("subject")}
                  className={fieldClass("subject")}
                  placeholder="Internship, collaboration, project…"
                />
                {errors.subject && (
                  <p className="mt-1.5 text-[12px] text-destructive">{errors.subject}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-[13px] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  className={cn(fieldClass("message"), "resize-none")}
                  placeholder="Tell me a little about it…"
                />
                {errors.message && (
                  <p className="mt-1.5 text-[12px] text-destructive">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button type="submit" variant="primary" size="lg">
                Send message
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              {sent && (
                <p
                  className="flex items-center gap-2 rounded-full bg-accent-2/15 px-4 py-2 text-[13px] text-accent-2"
                  style={{ animation: "rise 0.4s ease both" }}
                >
                  <Check className="h-4 w-4" /> Message sent successfully!
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const links = SECTIONS.filter((s) =>
    ["home", "about", "projects", "experience", "contact"].includes(s.id),
  );
  return (
    <footer className="border-t border-border bg-surface-2 py-14">
      <div className="shell grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-ink">
            SARON VINNARASI V
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Designing • Learning • Building
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="focus-ring text-[13px] text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <a
              href="https://github.com/saronvinnarasi2005-bit"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saron-vinnarasi-v-2602b4416/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="shell mt-10 border-t border-border pt-6">
        <p className="font-mono text-[11px] text-muted-foreground">
          © 2026 Saron Vinnarasi V. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
