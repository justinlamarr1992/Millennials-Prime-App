import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;

  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title:{item.title}</Text>
        <Text>Body:{JSON.stringify(item.body)}</Text>
        <Text>Rating:{JSON.stringify(item.rating)}</Text>
      </Card>

      {/* <Button title="Back to Home Screen" onPress={pressHandler} /> */}
    </View>
  );
}
