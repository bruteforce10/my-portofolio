/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    boxShadow: {
      lgWhite: "0px 4px 4px 0px rgba(255, 255, 255, 0.25);",
    },

    extend: {
      colors: {
        primary: "#204C74",
        text: "#12385C",
      },
      fontSize: {
        h1: [
          "62px",
          {
            lineHeight: "150%",
            letterSpacing: "1.2px",
          },
        ],
        lead: ["30px", { lineHeight: "150%", letterSpacing: "0.56px" }],
        h4: ["40px"],
        h2: ["56px", { lineHeight: "150%", letterSpacing: "1.2px" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
