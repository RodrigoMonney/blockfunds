import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "hubot-sans": ["var(--font-hubot-sans)"],
        "fira-sans": ["var(--font-fira-sans)"],
      },
      colors: {
        "block-funds-white": "#FAFFFD",
        "block-funds-white-sub": "#B2B3B4",
        "primary-black": "#080A0D",
        "primary-green": "#14634B",
        "neutral-stroke": "#3F4D6A",
        "card-gray": "#161B23",
        "card-gray-icon": "#2D3749",
      },
      backgroundImage: {
        "block-funds-background": "url('/images/block-funds-background.png')",
      },
      lineHeight: {
        "block-funds-line-height-sub": "33px",
      },
    },
  },
  plugins: [],
};
export default config;
