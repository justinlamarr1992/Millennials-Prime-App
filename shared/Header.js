import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/images/Tutorial/game_bg.png")}
      style={globalStyles.header}
    >
      {/* <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      /> */}
      <View style={globalStyles.headerTitle}>
        {/* Would be custom Header */}
        <Image
          style={globalStyles.headerImage}
          source={require("../assets/images/MillennialsPrimeLogoNB.png")}
        />
        <Text style={globalStyles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
