import { useState } from "react";
import { Eye, EyeOff, Check, RotateCcw, Search, Plus, Pencil, Trash2, Timer } from "lucide-react";

export function MemoryGameMock() {
  const cards = ["★", "◆", "●", "▲", "★", "■", "◆", "●"];
  const revealed = [0, 4];
  const flipped = [2];
  return (
    <div className="grid-paper h-full w-full bg-surface-2 p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-background">
            Score 240
          </span>
          <span className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
            <Timer className="h-3 w-3" /> 01:12
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground">
          <RotateCcw className="h-3 w-3" /> Restart
        </span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
        {cards.map((c, i) => {
          const isMatched = revealed.includes(i);
          const isFlipped = flipped.includes(i);
          return (
            <div
              key={i}
              className={`grid aspect-[3/4] place-items-center rounded-xl border text-lg font-semibold transition-all duration-500 ${
                isMatched
                  ? "border-accent-2 bg-accent-2/15 text-accent-2"
                  : isFlipped
                    ? "border-primary bg-surface text-primary shadow-[var(--shadow-soft)]"
                    : "border-transparent bg-gradient-to-br from-ink to-ink/75 text-transparent"
              }`}
            >
              {isMatched || isFlipped ? c : "?"}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <span className="flex items-center gap-1 text-accent-2">
          <Check className="h-3 w-3" /> matched
        </span>
        <span className="text-primary">· flipped</span>
        <span>· hidden</span>
      </div>
    </div>
  );
}

export function StudentDashboardMock() {
  const rows = [
    ["101", "Aarthi R", "MCA", "8.6"],
    ["102", "Bavesh K", "BCA", "8.1"],
    ["103", "Divya S", "MCA", "9.0"],
  ];
  return (
    <div className="h-full w-full bg-surface-2 p-4 sm:p-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          ["Students", "1,248"],
          ["Departments", "06"],
          ["Records today", "37"],
        ].map(([l, v]) => (
          <div
            key={l}
            className="rounded-xl border border-border bg-surface p-3 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              {l}
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-[11px] text-muted-foreground">
          <Search className="h-3 w-3" /> Search students…
        </span>
        <span className="flex items-center gap-1 rounded-lg bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-foreground">
          <Plus className="h-3 w-3" /> Add
        </span>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-border bg-surface">
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-2 border-b border-border bg-surface-2 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
          <span>ID</span>
          <span>Name</span>
          <span>Dept</span>
          <span>CGPA</span>
          <span>Actions</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r[0]}
            className={`grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-2 px-3 py-2.5 text-[11px] text-ink transition-colors duration-300 hover:bg-accent ${
              i === 1 ? "bg-accent" : ""
            }`}
          >
            <span className="font-mono text-muted-foreground">{r[0]}</span>
            <span className="truncate">{r[1]}</span>
            <span className="text-muted-foreground">{r[2]}</span>
            <span>{r[3]}</span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Pencil className="h-3 w-3 hover:text-primary" />
              <Trash2 className="h-3 w-3 hover:text-destructive" />
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" /> MySQL connected
      </p>
    </div>
  );
}

export function LoginFormMock() {
  const states = ["empty", "focus", "error", "success"] as const;
  const [state, setState] = useState<(typeof states)[number]>("focus");
  const [show, setShow] = useState(false);
  return (
    <div className="h-full w-full bg-surface-2 p-4 sm:p-6">
      <div className="mx-auto max-w-[300px] rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
        <p className="font-display text-base font-semibold text-ink">Welcome back</p>
        <p className="mt-1 text-[11px] text-muted-foreground">Sign in to continue</p>

        <label className="mt-4 block font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Email
        </label>
        <div
          className={`mt-1.5 rounded-lg border px-3 py-2 text-[12px] transition-all duration-300 ${
            state === "error"
              ? "border-destructive text-ink"
              : state === "empty"
                ? "border-border text-muted-foreground"
                : "border-primary text-ink shadow-[0_0_0_3px_oklch(0.52_0.21_275/0.14)]"
          }`}
        >
          {state === "empty" ? "you@email.com" : "saronvinnarasi2005@gmail.com"}
        </div>

        <label className="mt-3 block font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Password
        </label>
        <div
          className={`mt-1.5 flex items-center justify-between rounded-lg border px-3 py-2 text-[12px] transition-all duration-300 ${
            state === "error" ? "border-destructive" : "border-border"
          }`}
        >
          <span className="text-ink">
            {state === "empty" ? "" : show ? "saron@2005" : "••••••••••"}
          </span>
          <button
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            className="focus-ring text-muted-foreground transition-colors hover:text-primary"
          >
            {show ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          </button>
        </div>

        {state === "error" && (
          <p className="mt-2 text-[10px] text-destructive">Incorrect email or password.</p>
        )}
        {state === "success" && (
          <p className="mt-2 flex items-center gap-1 text-[10px] text-accent-2">
            <Check className="h-3 w-3" /> Login successful — redirecting…
          </p>
        )}

        <div
          className={`mt-4 rounded-full py-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 ${
            state === "success"
              ? "bg-accent-2 text-background"
              : state === "empty"
                ? "bg-border text-muted-foreground"
                : "bg-ink text-background"
          }`}
        >
          {state === "success" ? "Signed in" : "Log in"}
        </div>
        <p className="mt-2.5 text-center text-[10px] text-muted-foreground underline decoration-border">
          Forgot password?
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {states.map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`focus-ring rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors duration-300 ${
              state === s
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-muted-foreground hover:text-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
