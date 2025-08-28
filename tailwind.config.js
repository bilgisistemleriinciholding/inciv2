/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        'xxs': "500px",
        "3xl": "1800px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anydore: ["Anydore", "sans-serif"],
      },
      colors: {
        inci_red: "#e30613",
        inci_red_dark: "#ca0001",
        inci_green: "#54a665",
        inci_green2: "#92db72",
        inci_green_light: "#e6ffc9",
        inci_gray: "#c7c9d1",
        inci_gray_light: "#e7e7e7",
        inci_gray_extra_light: "#f4f4f4",
        inci_blue: "#4564b4",
        inci_blue2: "#009bc1",
        inci_blue3: "#43c7ff",
        inci_blue4: "#0086e3",
        inci_blue_light: "#c7eeff",
        inci_turquoise: "#70cbbb",
        inci_orange: "#f3581b",
        inci_yellow: "#febc00",
        inci_yellow2: "#f8a600",
        inci_purple: "#9d4fc5",
        inci_pink: "#fd97e3",
        inci_pink_light: "#ffe0fa",
        inci_brown: "#ff8d43",
        inci_brown_light: "#fee2d0",
      },
      borderWidth: {
        12: "12px",
        16: "16px",
      },
      borderRadius: {
        "4xl": "32px",
        "6xl": "50px",
      },
      fontSize: {
        28: "28px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
