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
        primaryDark: "#151515",
        primaryLight: "#E9EAEE",
        orange: "#F94D25",
        golden: "#E5BC34",
        darkGrey: "#878988",
        lightGrey: "#AFB2B2",
        green: "#51CC87",
        salmon: "#EE957C",
        khakhi: "#C0B29C",
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
};
export default config;
