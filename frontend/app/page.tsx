"use client";

import { useState } from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import DecryptForm from "../components/DecryptForm";
import EncryptForm from "../components/EncryptForm";
import PasswordGenerator from "../components/PasswordGenerator";

type TabId = "encrypt" | "decrypt" | "password";

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("encrypt");
  const [sharedPassword, setSharedPassword] = useState("");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0e1117]">
      <AppHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <section className="mobile-shell">
        <div className="mt-2 animate-fade-in" role="tabpanel" aria-live="polite">
          {activeTab === "encrypt" ? <EncryptForm password={sharedPassword} onPasswordChange={setSharedPassword} /> : null}
          {activeTab === "decrypt" ? <DecryptForm password={sharedPassword} onPasswordChange={setSharedPassword} /> : null}
          {activeTab === "password" ? <PasswordGenerator /> : null}
        </div>
      </section>

      <AppFooter />
    </main>
  );
}

