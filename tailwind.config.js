module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        card: "210px",
      },
      minWidth: {
        monitor: "100vh",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#F48653",
      primaryLight: "#FDE7DD",
      primaryDark: "#EC6324",
      gray: "#4B4B4B",
      grayLight: "#CBCCCC",
      grayDark: "#191919",
      white: "#FDFDFC",
      trueWhite: "#fffff",
      black: "#0A0C0B",
      danger: "#EB4335",
      success: "#21BB5E",
    },
  },
  plugins: [],
};
