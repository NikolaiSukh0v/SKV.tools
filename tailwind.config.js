/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./projects/**/*.{html,ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        void: {
          950: "#050509",
          900: "#0a0a14",
          800: "#11111f",
        },
        content: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#52525B",
        },
        neon: {
          cyan: "#00F2FF",
          purple: "#BC13FE",
          emerald: "#10B981",
          rose: "#F43F5E",
          amber: "#F59E0B",
        },
        glass: {
          white: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      dropShadow: {
        "neon-cyan": "0 0 10px rgba(0, 242, 255, 0.5)",
        "neon-purple": "0 0 10px rgba(188, 19, 254, 0.5)",
      },
      spacing: {
        100: "100px",
      },
    },
  },
  plugins: [],
};
