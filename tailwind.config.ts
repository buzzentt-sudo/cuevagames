import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0a0a0f",
        surface: "#12121a",
        "surface-light": "#1a1a26",
        border: "#26262f",
        primary: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#6d28d9",
        },
        accent: {
          DEFAULT: "#22d3ee",
          light: "#67e8f9",
          dark: "#0891b2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.25), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(34,211,238,0.15), transparent)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(139, 92, 246, 0.25)",
        "glow-accent": "0 0 25px rgba(34, 211, 238, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
