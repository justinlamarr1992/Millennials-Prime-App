import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Ad({ title, description }) {
  return (
    <View style={globalStyles.adPost}>
      <Text style={{ ...globalStyles.adTitle, ...globalStyles.postContent }}>
        More to Come
      </Text>

      {/* <Text style={{ ...globalStyles.adTitle, ...globalStyles.postContent }}>
        {title}
      </Text> */}
      {/* <Text
        style={{ ...globalStyles.adDescription, ...globalStyles.postContent }}
      >
        {description}
      </Text> */}
      {/* <Text style={{ ...globalStyles.postLikes, ...globalStyles.postContent }}>
        Likes
      </Text> */}
    </View>
  );
}
