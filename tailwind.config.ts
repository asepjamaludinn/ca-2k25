import type { Config } from "tailwindcss";
import { THEME } from "./lib/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // === Integrasi dari THEME.ts ===
      colors: THEME.colors,
      spacing: THEME.spacing,
      fontFamily: THEME.typography.fontFamily,
      fontSize: THEME.typography.fontSize,

      // === Animasi Kustom (Button Berkedip) ===
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: `0 0 25px ${THEME.colors.primary}`,
            opacity: "1",
          },
          "50%": {
            boxShadow: `0 0 45px ${THEME.colors.primaryHover}, 0 0 65px ${THEME.colors.primary}`,
            opacity: "0.9",
          },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;