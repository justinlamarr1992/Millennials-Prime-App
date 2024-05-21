import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { globalStyles } from "../../../styles/global";
import PicturePost from "../../shared/PostComponents/PicturePost";
import PrimePicturePost from "../../shared/PostComponents/PrimePicturePost";
import VideoPost from "../../shared/PostComponents/VideoPost";
import PrimeVideoPost from "../../shared/PostComponents/PrimeVideoPost";

export default function User() {
  const { auth, id, accessToken, roles } = useContext(AuthContext);
  const navigation = useNavigation();
  const colors = useTheme().colors;

  return (
    // <View style={{ color: colors.background }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ color: colors.background }}
    >
      <View style={[globalStyles.padding]}>
        <Text style={{ color: colors.priT }}>User: {id}</Text>
        <PicturePost />
        <PrimePicturePost />
        <VideoPost />
        <PrimeVideoPost />
      </View>
    </ScrollView>
    // </View>
  );
}
