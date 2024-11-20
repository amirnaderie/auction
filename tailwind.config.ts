import type { Config } from "tailwindcss";

const config: Config = {
  variants: { extend: ['rtl'], },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        yekan: ["var(--font-yekan)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true, // Enable RTL support globally
    themes: [
      {
        mytheme: {
          // Your theme colors here
          primary: "#570DF8",
          secondary: "#F000B8",
          // ... other colors
        },
      },
    ],
  },
};
export default config;
