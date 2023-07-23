const COLORS = {
  /* Background */
  background: "#F7F7F7",
  background2: "#C4C4C4",

  /* Form Color */
  formC: "#ffffff",

  /* Text Colors */
  priT: "#020101",
  secT: "#ffffff",
  triT: "#8F92A1",

  /* Colors */
  priC: "#611821",
  secC: "#8e202b",
  triC: "#BD2932",
  quaC: "#fffd9b",
  quiC: "#ddcd76",
  hexC: "#b9a054",

  /* NavBar Colors */
  navbC: "#BD2932",
  footC: "#939597",

  transpWhite: "rgba(255, 255, 255, 0.9)",

  outline: "#8F92A1",
};

const FONT = {
  regular: "Inter",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
