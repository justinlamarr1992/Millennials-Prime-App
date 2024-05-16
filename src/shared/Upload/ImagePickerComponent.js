import { View, Text } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerComponent() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No Permission request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      // THIS IS ONLY VIDOES FOR THE PURPOSE BUT CAN BE ALL
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

  return (
    <View>
      <Text>ImagePickerComponent</Text>
    </View>
  );
}
