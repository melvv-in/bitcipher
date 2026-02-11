export default function DocsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight text-[#e6edf3]">Documentation</h1>
      <p className="mt-3 text-sm text-[#8b949e]">BitCipher quick usage guide</p>

      <section className="mt-6 space-y-5 rounded-2xl border border-[#30363d] bg-[#161b22] p-5 text-sm text-[#8b949e]">
        <div>
          <h2 className="text-base font-semibold text-[#e6edf3]">Encrypt</h2>
          <p className="mt-1">Enter plaintext and password, then copy the encrypted message output.</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#e6edf3]">Decrypt</h2>
          <p className="mt-1">Paste encrypted message and enter the same password to recover plaintext.</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#e6edf3]">Password Generator</h2>
          <p className="mt-1">Choose length (4-16), toggle symbols, generate, and copy secure passwords.</p>
        </div>
      </section>
    </main>
  );
}
