import AppShell from "../../components/AppShell";
import PasswordGenerator from "../../components/PasswordGenerator";

export default function PasswordPage() {
  return (
    <AppShell
      active="password"
      title="Password Generation Workspace"
      subtitle="Generate long, strong, and unpredictable passwords with one click for safer account protection."
    >
      <div className="mx-auto mt-8 w-full max-w-2xl lg:mt-10">
        <PasswordGenerator />
      </div>
    </AppShell>
  );
}
