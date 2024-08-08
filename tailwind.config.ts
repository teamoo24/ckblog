import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 'media' または 'class' のどちらかを指定できます
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};
export default config;
