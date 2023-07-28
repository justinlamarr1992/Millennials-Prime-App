import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;

  const rating = item.rating;

  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title:{item.title}</Text>
        <Text>Body:{JSON.stringify(item.body)}</Text>
        {/* <Text>Rating:{JSON.stringify(item.rating)}</Text> */}
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>

      {/* <Button title="Back to Home Screen" onPress={pressHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
