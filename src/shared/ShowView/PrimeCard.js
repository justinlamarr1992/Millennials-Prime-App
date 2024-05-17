import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../styles/global";
import UserInfo from "../PostItems/UserInfo";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    navigation.navigate("PrimeShow", {
      guid: guid,
      videoLibraryId: videoLibraryId,
      title: title,
      description: description,
      dateUploaded: dateUploaded,
    });
  };
  const deleteVideo = () => {
    console.log("Dang you was gone delete the video forreal");
    const options = {
      method: "DELETE",
      headers: {
        accept: "application/json",
        // Test
        AccessKey: "8ad268ac-6b0a-46fb-92d9b1a6d918-c4e1-4edf",
        // Live
        // AccessKey: "a80779d4-9931-4345-80c1ca2315d2-fc09-4143",
      },
    };

    fetch(
      `https://video.bunnycdn.com/library/${videoLibraryId}/videos/${guid}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <View
      key={key}
      style={[
        globalStyles.flexRow,
        globalStyles.showView,
        globalStyles.vertMargin,
        { backgroundColor: colors.primCar },
      ]}
    >
      <TouchableOpacity
        onPress={pressedVideo}
        style={[globalStyles.primeCardLeft]}
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

      <TouchableOpacity
        style={[globalStyles.primeCardRight]}
        onPress={deleteVideo}
      >
        <Ionicons name="trash" size="large" color="#611821" />
      </TouchableOpacity>
    </View>
  );
}
