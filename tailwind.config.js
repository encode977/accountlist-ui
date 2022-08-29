module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: "#E5E5E5",
        green: "#00D98B",
        border: "#C9C9DA",
        blue: "#121633",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: "12px",
      tiny: ".875rem",
      base: "14px",
      lg: "1.125rem",
      xl: "20px",
      title: "32px",
      "2xl": "24px",
      "3xl": "48px",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
