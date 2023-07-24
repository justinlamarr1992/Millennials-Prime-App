import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
    </View>
  );
}

//  <TouchableWithoutFeedback
//    onPress={() => {
//      Keyboard.dismiss();
//      console.log("Dismissed Keyboard");
//    }}
//  >
//    <View style={styles.container}>
//      <Header />
//      {/* Header */}
//      <Text>Starting Over</Text>
//    </View>
//  </TouchableWithoutFeedback>;
