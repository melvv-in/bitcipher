type Props = { message: string; tone: "success" | "error" };

export function StatusToast({ message, tone }: Props) {
  return (
    <div
      aria-live="polite"
      className={`fixed left-4 right-4 top-[6.8rem] z-50 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg backdrop-blur-xl ${
        tone === "success"
          ? "border-[#2ea043]/45 bg-[#2ea043]/10 text-[#e6edf3]"
          : "border-[#da3633]/55 bg-[#da3633]/10 text-[#ffa198]"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${tone === "success" ? "bg-[#2ea043]" : "bg-[#da3633]"}`} />
      <p className="font-medium">{message}</p>
    </div>
  );
}
