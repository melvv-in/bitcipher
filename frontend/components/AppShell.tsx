import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldIcon } from "./Icons";

type AppShellProps = {
  active: "crypto" | "password";
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AppShell({ active, title, subtitle, children }: AppShellProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:24px_24px] opacity-35" />
      <div className="pointer-events-none absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-9rem] top-10 h-80 w-80 rounded-full bg-accentBlue/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[150px]" />

      <header className="sticky top-0 z-40 border-b border-cyan-200/10 bg-slate-950/75 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="icon-wrap h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-300/20 via-accent/20 to-accentBlue/30 text-cyan-100 shadow-glow">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold tracking-tight text-white">BitCipher</p>
              <p className="truncate text-xs uppercase tracking-[0.16em] text-cyan-100/60">Security Tools</p>
            </div>
          </div>

          <nav className="inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-slate-950/70 p-1">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                active === "crypto"
                  ? "bg-gradient-to-r from-cyan-300 to-accent text-slate-900"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Encrypt/Decrypt
            </Link>
            <Link
              href="/password"
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                active === "password"
                  ? "bg-gradient-to-r from-cyan-300 to-accent text-slate-900"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Password Generator
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-pretty text-sm text-slate-300 sm:text-base">{subtitle}</p>
        </div>
        {children}
      </section>

      <footer className="border-t border-cyan-200/10 bg-slate-950/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 text-center text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-xs">
          <span>BitGL Security Tools</span>
          <span>Built for modern zero-trust workflows</span>
        </div>
      </footer>
    </main>
  );
}
