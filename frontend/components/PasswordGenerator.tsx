"use client";

import { useState } from "react";
import { generatePassword } from "../lib/api";
import { copyToClipboard } from "../lib/copy";
import GlassCard from "./GlassCard";
import { CopyIcon, LoaderIcon, SparklesIcon } from "./Icons";
import { StatusToast } from "./StatusToast";

type Toast = { message: string; tone: "success" | "error" };

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (payload: Toast) => {
    setToast(payload);
    setTimeout(() => setToast(null), 2400);
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      setLoading(true);
      const { data } = await generatePassword(length, includeSymbols);
      setPassword(data?.password ?? "");
      showToast({ tone: "success", message: "New password generated." });
      if (navigator.vibrate) navigator.vibrate(20);
    } catch {
      showToast({ tone: "error", message: "Password generation failed." });
    } finally {
      setLoading(false);
    }
  };

  const copyPassword = async () => {
    if (!password) {
      showToast({ tone: "error", message: "No password to copy." });
      return;
    }

    try {
      const copied = await copyToClipboard(password);
      if (!copied) throw new Error("Clipboard unavailable");
      if (navigator.vibrate) navigator.vibrate(20);
      showToast({ tone: "success", message: "Copied to clipboard." });
    } catch {
      showToast({ tone: "error", message: "Copy failed. Use manual select and copy." });
    }
  };

  return (
    <GlassCard
      id="generate"
      title="Password Generator"
      icon={<SparklesIcon className="h-5 w-5" />}
      actions={<span className="pill">4-16 chars</span>}
    >
      <form className="space-y-6" onSubmit={handleGenerate}>
        <div className="grid gap-2">
          <label className="input-label" htmlFor="length">
            Length ({length})
          </label>
          <input
            id="length"
            type="range"
            min={4}
            max={16}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="range-input"
          />
          <div className="pt-5">
            <input
              id="length-number"
              type="number"
              min={4}
              max={16}
              value={length}
              onChange={(e) => setLength(Math.min(16, Math.max(4, Number(e.target.value))))}
              className="input-field"
              placeholder="Enter length"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="flex min-h-[44px] items-center gap-3 rounded-xl border border-[#30363d] bg-[#0d1117] px-3 text-sm font-medium text-[#e6edf3]">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="checkbox-control"
            />
            Include symbols (! @ # $ % ^ & *)
          </label>
        </div>

        <div className="sticky-action">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? <LoaderIcon className="h-5 w-4 animate-spin" /> : null}
            {loading ? "Generating..." : "Generate Password"}
          </button>
        </div>

        <div className="result-panel">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs uppercase tracking-wide text-[#8b949e]">Generated password</span>
            <button type="button" className="btn-ghost" onClick={copyPassword} disabled={!password}>
              <CopyIcon className="h-4 w-4" />
              Copy
            </button>
          </div>
          <div
            className={`mt-2 rounded-lg border border-[#30363d] bg-[#0d1117] px-3 py-3 font-mono text-base break-all ${
              password ? "text-[#e6edf3]" : "text-[#8b949e]"
            }`}
          >
            {password || "Your password will appear  here."}
          </div>
        </div>
      </form>

      {toast ? <StatusToast message={toast.message} tone={toast.tone} /> : null}
    </GlassCard>
  );
}
