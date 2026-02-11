import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#05070f",
        panel: "rgba(17,24,39,0.6)",
        accent: "#4df3c9",
        accentBlue: "#4cc9ff",
      },
      boxShadow: {
        glow: "0 0 24px rgba(77,243,201,0.22), 0 0 48px rgba(76,201,255,0.16)",
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at 14% 15%, rgba(88,212,255,0.16), transparent 28%), radial-gradient(circle at 84% 8%, rgba(77,243,201,0.14), transparent 24%), linear-gradient(140deg, #02050c 0%, #060b17 42%, #04070f 72%, #02040a 100%)",
        grid:
          "radial-gradient(circle at 1px 1px, rgba(118,227,255,0.12) 1px, transparent 0)",
      },
      borderRadius: { "2.5xl": "1.25rem" },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
