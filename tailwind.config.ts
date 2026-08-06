import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slideBgStart: "#0f172a",
        slideBgEnd: "#1e293b",
        skyAccent: "#38bdf8",
        yellowAccent: "#facc15",
        emeraldAccent: "#34d399",
        roseAccent: "#fb7185",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      aspectRatio: {
        widescreen: "16 / 9",
      },
    },
  },
  plugins: [],
};
export default config;
