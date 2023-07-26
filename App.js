import React, { useState } from "react";
import Home from "./screens/Home";

// import * as Font from "expo-font";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/HomeStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}
