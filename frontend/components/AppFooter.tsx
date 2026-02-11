import Link from "next/link";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/";

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-0 border-t border-[#30363d] bg-[#0e1117]/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-xl px-4 py-3">
        <p className="text-center text-sm font-semibold text-[#e6edf3]">BitCipher</p>

        <nav className="mt-2 flex items-center justify-center gap-2" aria-label="Footer links">
          <Link
            href="/privacy"
            className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg border border-[#30363d] bg-[#161b22] text-[#8b949e] transition-colors hover:text-[#e6edf3]"
            aria-label="Privacy"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M12 3 5 6v6c0 4.2 2.9 6.5 7 8 4.1-1.5 7-3.8 7-8V6l-7-3Z" />
            </svg>
          </Link>

          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg border border-[#30363d] bg-[#161b22] text-[#8b949e] transition-colors hover:text-[#e6edf3]"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1 2.9.8.1-.7.3-1 .6-1.2-2.3-.3-4.7-1.2-4.7-5.2 0-1.2.4-2.1 1-2.8-.1-.2-.4-1.3.1-2.8 0 0 .8-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.5 1.5.2 2.5.1 2.8.6.7 1 1.6 1 2.8 0 4-2.4 4.9-4.8 5.2.4.3.7 1 .7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
            </svg>
          </Link>

          <Link
            href="/docs"
            className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg border border-[#30363d] bg-[#161b22] text-[#8b949e] transition-colors hover:text-[#e6edf3]"
            aria-label="Documentation"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 4h9a3 3 0 0 1 3 3v13H9a3 3 0 0 0-3 3V4Z" />
              <path d="M6 4v16a3 3 0 0 1 3-3h9" />
            </svg>
          </Link>
        </nav>

        <p className="mt-2 text-center text-[11px] text-[#8b949e]">© {year} BitGL. All rights reserved.</p>
      </div>
    </footer>
  );
}


