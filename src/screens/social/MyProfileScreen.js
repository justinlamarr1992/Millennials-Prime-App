import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

import PicturePost from "../../shared/PostComponents/PicturePost";

import { globalStyles } from "../../../styles/global";
import VideoPost from "../../shared/PostComponents/VideoPost";
import TextPost from "../../shared/PostComponents/TextPost";

export default function MyProfileScreen() {
  const { auth, id, accessToken, roles } = useContext(AuthContext);
  const colors = useTheme().colors;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ color: colors.background }}
    >
      <View style={[globalStyles.padding]}>
        <Text style={{ color: colors.priT }}>MyProfile</Text>
        <TextPost
          title={"Testing the Title for the User Profile Post"}
          description={
            "This is where the description of the text Post will go, but it will be however long the user types... However we may need to restrict this by a maximum of 10 lines"
          }
          prime={false}
        />
        <PicturePost
          title={"Test"}
          description={
            "This is where the description of the pst willl go, but it will be shortened to only two lines max..."
          }
          prime={false}
        />
        <VideoPost
          title={"This is a Video Post Title"}
          description={
            "This is where the description of the pst willl go, but it will be shortened to only two lines max..."
          }
          prime={false}
          libraryId={147838}
          videoId={"ec4cbe34-8750-4695-b252-69f53e51627a"}
          url={"https://www.youtube.com/embed/cqyziA30whE"}
        />
      </View>
    </ScrollView>
  );
}
