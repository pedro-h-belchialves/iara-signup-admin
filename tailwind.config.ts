import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0058E0",
        "primary-content": "#4A8FFF",

        secondary: "#00E5A8",
        "secondary-content": "#66F3CF",

        accent: "#1E293B",
        "accent-content": "#475569",

        neutral: "#FFFFFF",
        "neutral-content": "#F5F8FC",

        "base-100": "#DBE6F4",
        "base-200": "#CBD3DB",
        "base-content": "#EFF6FF",

        error: "#EF4444",
        success: "#2DD4BF",
        warning: "#FACC15",
      },
    },
  },
  plugins: [],
} satisfies Config;
