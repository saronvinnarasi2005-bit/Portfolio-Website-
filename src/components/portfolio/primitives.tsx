import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const;

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setSeen(true);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("transition-none", className)}
      style={
        seen
          ? { animation: `rise 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms both` }
          : { opacity: 0, transform: "translateY(24px)" }
      }
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  lead,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "raised";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 py-20 sm:py-28",
        tone === "raised" && "bg-surface-2 border-y border-border",
        className,
      )}
    >
      <div className="shell">
        {(eyebrow || title) && (
          <Reveal>
            <header className="mb-12 max-w-3xl">
              {eyebrow && (
                <p className="eyebrow flex items-center gap-3">
                  {index && <span className="text-primary">{index}</span>}
                  <span className="h-px w-8 bg-border" aria-hidden />
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] text-ink sm:text-5xl">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {lead}
                </p>
              )}
            </header>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-ring active:scale-[0.97] disabled:pointer-events-none disabled:opacity-45";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <button
      className={cn(
        buttonBase,
        size === "sm" && "px-4 py-2 text-[13px]",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3.5 text-[15px]",
        variant === "primary" &&
          "bg-ink text-background hover:bg-primary hover:shadow-[var(--shadow-lift)]",
        variant === "accent" &&
          "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[var(--shadow-lift)]",
        variant === "outline" &&
          "border border-border bg-surface text-ink hover:border-primary hover:text-primary",
        variant === "ghost" && "text-muted-foreground hover:bg-secondary hover:text-ink",
        className,
      )}
      {...props}
    />
  );
}

export function Chip({
  active,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      className={cn(
        "focus-ring rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
          : "border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-ink",
        className,
      )}
      {...props}
    />
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </span>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  const decimals = String(value).includes(".") ? 2 : 0;
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1100);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Modal({
  open,
  onClose,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        aria-label="Close overlay"
        onClick={onClose}
        className="absolute inset-0 bg-ink/45 backdrop-blur-[3px] animate-in fade-in duration-200"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-4xl border border-border bg-surface shadow-[var(--shadow-lift)] sm:rounded-3xl animate-in slide-in-from-bottom-6 fade-in duration-300"
      >
        {children}
      </div>
    </div>
  );
}
