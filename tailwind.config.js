/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#469AFF",
        "blue-secondary": "#79B6FF",
        "blue-dark": "#1E4B83",
        "blue-dark-accent": "#cfe6ff",
        "blue-light": "#F2F9FF",
        grey: "#ACACAC",
      },
      fontFamily: {
        lekton: ["Lekton", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        bob: "bob 1s ease-in-out infinite",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "slide-up": 'slideUp 0.5s ease-in',
      },
    },
  },
  plugins: [],
};
