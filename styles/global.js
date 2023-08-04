import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: "inter-bold",
    fontSize: 18,
    color: "#020101",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  testHeader: {
    backgroundColor: "#020101",
  },
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#611821",
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffffff",
    letterSpacing: 1,
  },
  icon: {
    // position: "absolute",
    // left: 16,
  },
  headerTitle: { flexDirection: "column", alignItems: "center" },
  headerImage: {
    width: 26,
    height: 26,
    marginVertical: 2,
  },
  modalContent: { flex: 1, padding: 20, paddingTop: 40 },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#b9a054",
    backgroundColor: "#fffd9b",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#611821",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  post: {
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#8e202b",
    shadowColor: "#BD2932",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  postContent: {
    marginVertical: 5,
  },
  primeTitle: { color: "#ffffff", fontWeight: "bold", fontSize: 30 },
  postVideo: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  postTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  postDescription: {
    color: "#8F92A1",
    fontSize: 12,
  },
  postLikes: {
    marginBottom: 20,
  },
  adPost: {
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#ddcd76",
    shadowColor: "#fffd9b",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  // --p-bshade: 0 0px 25px 1px #611821;
  // --p2-bshade: 0 0px 25px 1px #b9a054;

  adTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
  adDescription: {},
});

export const images = {
  ratings: {
    1: require("../assets/images/Tutorial/rating-1.png"),
    2: require("../assets/images/Tutorial/rating-2.png"),
    3: require("../assets/images/Tutorial/rating-3.png"),
    4: require("../assets/images/Tutorial/rating-4.png"),
    5: require("../assets/images/Tutorial/rating-5.png"),
  },
};

// const COLORS = {
//    Background
//   background: "#F7F7F7",
//   background2: "#C4C4C4",

//    Form Color
//   formC: "#ffffff",

//    Text Colors
//   priT: "#020101",
//   secT: "#ffffff",
//   triT: "#8F92A1",

//    Colors
//   priC: "#611821",
//   secC: "#8e202b",
//   triC: "#BD2932",
//   quaC: "#fffd9b",
//   quiC: "#ddcd76",
//   hexC: "#b9a054",

//   NavBar Colors
//   navbC: "#BD2932",
//   footC: "#939597",

//   transpWhite: "rgba(255, 255, 255, 0.9)",

//   outline: "#8F92A1",
// };

// const FONT = {
//   regular: "Inter",
//   medium: "DMMedium",
//   bold: "DMBold",
// };

// const FONTFAMILY = {
//    --font: "Inter", sans-serif;
// };

// const SIZES = {
//   xSmall: 10,
//   small: 12,
//   medium: 16,
//   large: 20,
//   xLarge: 24,
//   xxLarge: 32,
// };

// const SHADOWS = {
//   small: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 2,
//   },
//   medium: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 5.84,
//     elevation: 5,
//   },
// };

// export { COLORS, FONT, SIZES, SHADOWS };
