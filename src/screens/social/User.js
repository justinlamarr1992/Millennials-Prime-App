import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { globalStyles } from "../../../styles/global";
import PicturePost from "../../shared/PostComponents/PicturePost";
import PrimePicturePost from "../../shared/PostComponents/PrimePicturePost";
import VideoPost from "../../shared/PostComponents/VideoPost";
import PrimeVideoPost from "../../shared/PostComponents/PrimeVideoPost";
import TextPost from "../../shared/PostComponents/TextPost";
import PrimeTextPost from "../../shared/PostComponents/PrimeTextPost";

export default function User() {
  const { auth, id, accessToken, roles } = useContext(AuthContext);
  const navigation = useNavigation();
  // navigation.jumpTo("Business");
  // navigation.navigate("Business");
  const colors = useTheme().colors;
  const connectedUsers = () => {
    navigation.navigate("Connected Users");
  };

  return (
    // <View style={{ color: colors.background }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ color: colors.background }}
    >
      <View style={[globalStyles.padding]}>
        <Text style={{ color: colors.priT }}>User: {id}</Text>
        <Text style={{ color: colors.priT }}>Test User Profile Here</Text>
        <Pressable
          onPress={connectedUsers()}
          style={[
            globalStyles.button,
            globalStyles.vertMargin,
            { backgroundColor: colors.triC, marginBottom: 25 },
          ]}
        >
          <Text style={globalStyles.buttonText}>Connected Users</Text>
        </Pressable>
        <Pressable
          style={[
            globalStyles.button,
            globalStyles.vertMargin,
            { backgroundColor: colors.triC, marginBottom: 25 },
          ]}
        >
          <Text style={globalStyles.buttonText}>Ussers</Text>
        </Pressable>

        <TextPost />
        <PrimeTextPost />
        <PicturePost />
        <PrimePicturePost />
        <VideoPost />
        <PrimeVideoPost />
      </View>
    </ScrollView>
    // </View>
  );
}
