/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1240px",
    },
    colors: {
      primary: "#204C74",
    },
    boxShadow: {
      lgWhite: "0px 4px 4px 0px rgba(255, 255, 255, 0.25);",
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
    extend: {},
  },
  plugins: [],
};
