import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#244C3A",
        orchard: "#5F7D60",
        sage: "#EAF0E7",
        cream: "#FAF8F2",
        peach: "#E8B89A",
        ink: "#1F2A24",
        muted: "#5A675F",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,42,36,0.04), 0 8px 24px rgba(31,42,36,0.06)",
        lift: "0 2px 4px rgba(31,42,36,0.05), 0 16px 36px rgba(31,42,36,0.10)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
