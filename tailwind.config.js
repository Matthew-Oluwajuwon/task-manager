/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bg-color": "var(--bg-color)",
      "color-border": "var(--color-border)",
      primary: {
        100: "var(--primary-color-100)",
        200: "var(--primary-color-200)",
        300: "var(--primary-color-300)",
        400: "var(--primary-color-400)",
        500: "var(--primary-color-500)",
        600: "var(--primary-color-600)",
        700: "var(--primary-color-700)",
        800: "var(--primary-color-800)",
        900: "var(--primary-color-900)",
      },
      secondary: {
        100: "#FFF5E6",
        200: "#FFE0B3",
        300: "#FFCC80",
        400: "#FFB94D",
        500: "#FFA61A",
        600: "#CC8000",
        700: "#996600",
        800: "#664400",
        900: "#332200",
      },
      success: {
        100: "#E6FFEC",
        200: "#B3FFD9",
        300: "#80FFC6",
        400: "#4DFFB3",
        500: "#1AFFA0",
        600: "#00CC80",
        700: "#009966",
        800: "#00664D",
        900: "#003326",
      },
      danger: {
        100: "#FFE6E6",
        200: "#FFB3B3",
        300: "#FF8080",
        400: "#FF4D4D",
        500: "#FF1A1A",
        600: "#CC0000",
        700: "#990000",
        800: "#660000",
        900: "#330000",
      },
      warning: {
        100: "#FFF0E6",
        200: "#FFD9B3",
        300: "#FFC680",
        400: "#FFB34D",
        500: "#FFA01A",
        600: "#CC8000",
        700: "#996600",
        800: "#664400",
        900: "#332200",
      },
      info: {
        100: "#E6F0FF",
        200: "#B3D9FF",
        300: "#80C2FF",
        400: "#4DAEFF",
      },
    },
    fontFamily: {
      "proxima-nova-black": ["proxima-nova-black"],
      "proxima-nova-bold": ["proxima-nova-bold"],
      "proxima-nova-semibold": ["proxima-nova-semibold"],
      "proxima-nova-medium": ["proxima-nova-medium"],
      "proxima-nova-regular": ["proxima-nova-regular"],
      "proxima-nova-thin": ["proxima-nova-thin"],
    },
  },
  plugins: [],
};
