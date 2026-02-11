import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  actions?: ReactNode;
  id?: string;
  children: ReactNode;
};

export default function GlassCard({ title, subtitle, icon, actions, id, children }: Props) {
  return (
    <section id={id} className="glass-card p-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          {icon ? (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30363d] bg-[#0d1117] text-[#58a6ff] [&>svg]:m-0 [&>svg]:h-5 [&>svg]:w-5">
              {icon}
            </div>
          ) : null}
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-semibold tracking-tight text-[#e6edf3]">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-[#8b949e]">{subtitle}</p>}
          </div>
        </div>
        {actions ? <div>{actions}</div> : null}
      </div>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}
