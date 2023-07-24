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

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: "inter-bold",
    fontSize: 18,
  },
});

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
