import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button, SECTIONS } from "./primitives";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-90 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/80 py-2 backdrop-blur-xl"
            : "border-b border-transparent py-4",
        )}
      >
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a
            href="#home"
            className="focus-ring flex min-w-0 items-center gap-3 rounded-full"
            aria-label="Saron Vinnarasi V — home"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink font-display text-[13px] font-bold text-background">
              SV
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold text-ink">
                Saron Vinnarasi V
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                UI/UX · Web · Development
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "focus-ring relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300",
                  active === s.id
                    ? "text-ink"
                    : "text-muted-foreground hover:bg-secondary hover:text-ink",
                )}
              >
                {s.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                    active === s.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
            <a href="#contact" className="ml-2">
              <Button size="sm" variant="primary">
                Let&apos;s connect
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="focus-ring flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" /> Menu
          </button>
        </div>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-primary to-accent-2 transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-100 flex flex-col bg-background transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex items-center justify-between py-5">
          <span className="eyebrow">Navigation</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="shell flex flex-1 flex-col justify-center gap-1 pb-10">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-b border-border py-4"
              style={open ? { animation: `rise 0.5s ease ${i * 45}ms both` } : undefined}
            >
              <span className="font-display text-3xl font-semibold text-ink transition-colors group-hover:text-primary">
                {s.label}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                0{i + 1}
              </span>
            </a>
          ))}
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" onClick={() => setOpen(false)} className="flex-1">
              <Button variant="accent" size="lg" className="w-full">
                Let&apos;s connect →
              </Button>
            </a>
            <a
              href="https://github.com/saronvinnarasi2005-bit"
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-border text-ink"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saron-vinnarasi-v-2602b4416/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-border text-ink"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>

      {/* Desktop section rail */}
      <aside className="fixed right-6 top-1/2 z-80 hidden -translate-y-1/2 flex-col gap-3 2xl:flex">
        {SECTIONS.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center justify-end gap-2">
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300",
                active === s.id
                  ? "text-primary opacity-100"
                  : "text-muted-foreground opacity-0 group-hover:opacity-100",
              )}
            >
              {`0${i + 1}`} {s.label}
            </span>
            <span
              className={cn(
                "h-px transition-all duration-300",
                active === s.id ? "w-7 bg-primary" : "w-3.5 bg-border group-hover:w-5",
              )}
            />
          </a>
        ))}
      </aside>
    </>
  );
}
