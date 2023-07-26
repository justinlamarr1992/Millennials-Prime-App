import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;

  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      <Text>Title:{item.title}</Text>
      <Text>Body:{JSON.stringify(item.body)}</Text>
      <Text>Rating:{JSON.stringify(item.rating)}</Text>
      {/* <Text>{navigation.getParams("title")}</Text> */}
      {/* <Button title="Back to Home Screen" onPress={pressHandler} /> */}
    </View>
  );
}
