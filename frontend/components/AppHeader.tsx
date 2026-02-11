"use client";

import Link from "next/link";
import Image from "next/image";

type TabId = "encrypt" | "decrypt" | "password";

type AppHeaderProps = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

const tabs: { id: TabId; label: string }[] = [
  { id: "encrypt", label: "Encrypt" },
  { id: "decrypt", label: "Decrypt" },
  { id: "password", label: "Password" },
];

export default function AppHeader({ activeTab, onTabChange }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0e1117]/90 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-xl px-4 pb-3 pt-3">
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea043]/35"
          >
            <Image
              src="/favicon.svg"
              alt="BitCipher Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <p className="truncate text-xl font-semibold tracking-tight text-[#e6edf3]">BitCipher</p>
          </Link>
        </div>

        <nav className="mt-5 grid grid-cols-3 gap-1 rounded-2xl border border-[#30363d] bg-[#161b22] p-1" role="tablist" aria-label="BitCipher tools">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`min-h-[44px] rounded-xl px-2 text-center text-xs font-semibold uppercase tracking-[0.08em] transition active:scale-[0.98] ${
                activeTab === tab.id ? "bg-[#58a6ff] text-[#0e1117]" : "text-[#8b949e] hover:text-[#e6edf3]"
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
