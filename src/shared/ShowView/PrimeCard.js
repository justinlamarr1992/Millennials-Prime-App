import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../styles/global";
import UserInfo from "../PostItems/UserInfo";

export default function PrimeCard({
  thumbnail,
  videoLibraryId,
  guid,
  title,
  description,
  dateUploaded,
  name,
  time,
  key,
}) {
  const navigation = useNavigation();

  const colors = useTheme().colors;
  const pressedVideo = () => {
    // console.log("Button was Pressed");
    navigation.navigate("PrimeShow", {
      guid: guid,
      videoLibraryId: videoLibraryId,
      title: title,
      description: description,
      dateUploaded: dateUploaded,
    });
  };
  return (
    <TouchableOpacity
      key={key}
      onPress={pressedVideo}
      style={[
        globalStyles.showView,
        globalStyles.centerItem,
        globalStyles.vertMargin,
        { backgroundColor: colors.primCar },
      ]}
    >
      <Text style={[globalStyles.showViewTitle, { color: colors.primCarT }]}>
        {title}
      </Text>
      <Text
        style={[globalStyles.showViewDescription, { color: colors.primCarT }]}
      >
        {description ? description : "No Description for now"}
      </Text>
      <Text
        style={[
          globalStyles.showViewDescription,
          globalStyles.bottomPadding10,
          { color: colors.primeCarST },
        ]}
      >
        {dateUploaded ? dateUploaded : "Loading"}
      </Text>
    </TouchableOpacity>
  );
}
