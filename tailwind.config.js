/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        barlow: ['Barlow'],
        trebuchetMs: ['Trebuchet MS'],
      },
      colors: {
        traeGreen1: "#93e4c1",
        traeGreen2: "#3baea0",
        traeGreen3: "#118a7e",
      },
    },
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '768px',
      'xl': '992px',
      '2xl': '1200px',
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
};
