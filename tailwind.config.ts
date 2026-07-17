import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        neon: {
          cyan: "#00e5ff",
          green: "#00ff9d",
          violet: "#b026ff"
        }
      }
    },
  },
  plugins: [],
};
export default config;
