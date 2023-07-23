import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Image } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "./constants";
// import {
//   Nearbyjobs,
//   Popularjobs,
//   ScreenHeaderBtn,
//   Welcome,
// } from "./home/components/Welcome.jsx";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.priC }}>
      {/* <Stack.Screen /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          {/* <View style={{ flex: 1, padding: SIZES.medium }}> */}
          <Text>HELLO</Text>
          {/* <Welcome /> */}
          {/* <Image
          source={require("./assets/images/MillennialsPrimeLogoNB.png")}
          style={{ width: 250, height: 250 }}
        /> */}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
