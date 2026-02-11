export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight text-[#e6edf3]">Privacy Policy</h1>
      <p className="mt-3 text-sm text-[#8b949e]">Last updated: February 11, 2026</p>

      <section className="mt-6 space-y-4 rounded-2xl border border-[#30363d] bg-[#161b22] p-5 text-sm text-[#8b949e]">
        <p>
          BitCipher is designed with a zero-knowledge model. Encryption and decryption operations happen on your
          active session workflow, and this app is intended to avoid storing your plaintext or passwords.
        </p>
        <p>
          We do not intentionally collect sensitive message content. Clipboard and generated outputs are controlled by
          your device and browser.
        </p>
        <p>
          For production deployments, configure HTTPS, secure hosting, access controls, and audit logging according to
          your organization&apos;s security policies.
        </p>
      </section>
    </main>
  );
}
