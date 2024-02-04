/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '8rem',
    },
    colors: {
      orange: "#FBA457",
      green: "#1DBF73",
      light_gray: "#F2F0FE"
    },
    fontFamily: {
      "montserrat": ['Montserrat', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'business-bg': "url('/images/business-bg.png')",

      }
    }

  },
  plugins: [],
};
