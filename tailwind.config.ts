import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest-green accent — CTAs, links, active states. Reads on both
        // the cream page background and as a headline highlight.
        accent: {
          DEFAULT: "#1F7A4D",
          soft: "#2F9463",
          dim: "#123D28",
        },
        // Near-black forest green, reserved for heading text.
        ink: "#0E2A20",
        // Light "premium SaaS" surface scale (cream page → white glass panels).
        surface: {
          950: "#F7F1E4", // page base, under the mesh gradient
          900: "#FFFFFF", // glass card base (paired with /opacity + blur)
          850: "#FBF8F1", // image / media frame background
          800: "#F0EAD9", // deeper tint panel
        },
        // Rotating pastel "mats" behind screenshots and card media.
        tint: {
          sage: "#CFE1B8",
          terracotta: "#F0C79C",
          sky: "#C3DAE6",
          sand: "#EAD48F",
        },
      },
      fontFamily: {
        // Body copy / UI — clean and highly legible at small sizes.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Headlines — expressive rounded-geometric display face.
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        "accent-glow": "0 16px 40px -12px rgba(31,122,77,0.35)",
        glass: "0 8px 30px -8px rgba(14,42,32,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
