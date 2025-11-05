import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#142220",
        main: "#417972",
        btn: "#f2d381",
        primary: "#ffffff",
        secondary: "#1A1A1A",
        grayBlack: "#051F0D",
        gry: "#6e6f75",
        grayWhite: "#e3ece7",
        pra: "#e3ece7ab",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "54": ["54px", { lineHeight: "65px" }],
        "28": ["28px", { lineHeight: "38px" }],
        "22": ["22px", { lineHeight: "38px" }],
      },
      spacing: {
        "130": "130px",
        "110": "110px",
        "100": "100px",
        "90": "90px",
        "182": "182px",
        "150": "150px",
        "120": "120px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1420px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
