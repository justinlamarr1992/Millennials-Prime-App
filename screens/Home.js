import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Go to Review Details" onPress={pressHandler} />
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
