import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const globalStyles = StyleSheet.create({
  borderDefault: {
    borderWidth: 1,
    borderColor: "#b9a054",
    // backgroundColor: "#fffd9b",
    padding: 10,
    borderRadius: 10,
  },
  uploadBox: { backgroundColor: "#ffffff" },
  errorText: { fontSize: 18 },
  scrollView: { marginBottom: 70 },
  showView: {
    borderWidth: 1,
    borderColor: "#b9a054",
    // backgroundColor: "#fffd9b",
    padding: 10,
    borderRadius: 10,
  },
  showViewTitle: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  showViewDescription: {},
  showViewTime: {},
  flex1: {
    flex: 1,
  },

  // SignIn View
  signInScreen: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
  },
  datePicker: {},
  centerItem: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
  },
  registerButtonBox: {
    width: "100%",
    height: "30%",
  },
  loginButtonBox: {
    width: "100%",
    height: "15%",
  },
  loginForm: { width: "100%", height: "70%" },
  registerForm: { width: "100%", height: "85%" },
  signInForm: {
    borderRadius: 10,
    paddingTop: 50,
    borderWidth: 1,
    // borderRadius: 2,
  },

  authModal: { backgroundColor: "#ffffff" },

  formTitle: {
    // paddingTop: 30,
    // displayz: flex,
    // flexDirection: column,
  },
  labelInput: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  padding: {
    padding: 20,
  },
  paddingTest: {
    padding: 200,
  },
  bottomPadding: { paddingBottom: 40 },
  bottomPadding20: { paddingBottom: 20 },
  bottomPadding10: { paddingBottom: 10 },
  groupPadding: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  vertPadding: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  margin: { margin: 20 },
  vertMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
  marginB100: {
    marginBottom: 100,
  },
  // Container Sizes
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f7f7f7",
  },

  // Text Types
  titleText: {
    fontFamily: "inter-bold",
    fontSize: 18,
    color: "#020101",
  },
  labelText: {
    // fontFamily: "inter-bold",
    fontSize: 13,
    color: "#8F92A1",
    paddingTop: 3,
    paddingBottom: 3,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },

  // Header
  testHeader: {
    backgroundColor: "#020101",
  },
  header: {
    position: "absolute",
    alignSelf: "center",
    // left: 0,
    // top: 0,
    // right: 0,
    // bottom: -75,
    width: 425,
    // height: "100%",
    height: 135,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 50,
    // marginTop: 50,
    paddingTop: 35,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: 1,
  },
  icon: {
    // position: "absolute",
    // left: 16,
  },
  headerTitle: { flexDirection: "column", alignItems: "center" },
  headerImage: {
    width: 50,
    height: 50,
    marginVertical: 5,
  },

  // Modal
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
    color: "#8F92A1",
  },
  settingsInput: {
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
    // backgroundColor: "#611821",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  cancelButton: {
    paddingHorizontal: 20,
    backgroundColor: "#11182711",
  },
  cancelButtonText: {
    color: "#075985",
  },
  confirmButton: {
    paddingHorizontal: 20,
    backgroundColor: "#BD2932",
  },
  // Post Styling
  post: {
    borderRadius: 20,
    elevation: 5,
    // backgroundColor: "#8e202b",

    shadowColor: "#BD2932",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.9,
    // shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  postContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  postContent: {
    marginVertical: 5,
  },
  postDescription: {
    color: "#8F92A1",
    fontSize: 12,
  },
  postLikes: {
    marginBottom: 20,
  },

  primePostTitle: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
  postTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },

  // User Info
  postUserInfo: {
    flexDirection: "row",
  },
  postUserInfoImage: {
    width: "100%",
    height: "100%",
  },
  primePostUserInfoName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000",
  },
  postUserInfoName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffffff",
  },
  postUserInfoPicContainer: {
    flex: 0.25,
    aspectRatio: 1,
    paddingRight: 5,
  },
  postUserInfoTextContainer: {
    justifyContent: "space-around",
  },
  postUserInfoTime: {
    color: "#8F92A1",
  },

  postVideo: {
    width: "auto",
    height: 205,
    borderRadius: 10,
    // height: "50%",
    // width: 100,
  },

  primeTitle: { color: "#ffffff", fontWeight: "bold", fontSize: 30 },

  adPost: {
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#ddcd76",
    shadowColor: "#fffd9b",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
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
  yellowGlow: {
    shadowColor: "#fffd9b",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
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
