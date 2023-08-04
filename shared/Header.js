import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View
      style={globalStyles.header}
      // style={globalStyles.header}
    >
      <LinearGradient
        colors={["#bd2932", "#a5242f", "#8e202b", "#771c26", "#611821"]}
        style={StyleSheet.absoluteFill}
      />
      {/* <Header {...props} style={{ backgroundColor: "transparent" }} /> */}
      <View style={globalStyles.headerTitle}>
        {/* Would be custom Header */}
        <Image
          style={globalStyles.headerImage}
          source={require("../assets/images/MillennialsPrimeLogoNB.png")}
        />
        <Text style={globalStyles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
