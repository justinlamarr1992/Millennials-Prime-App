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

export default function UserScreen() {
  const { auth, id, accessToken, roles } = useContext(AuthContext);
  const navigation = useNavigation();
  // navigation.jumpTo("Business");
  // navigation.navigate("Business");
  const colors = useTheme().colors;

  return (
    // <View style={{ color: colors.background }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ color: colors.background }}
    >
      <View style={[globalStyles.padding]}>
        <Text style={{ color: colors.priT }}>User: {id}</Text>
        <Text style={{ color: colors.priT }}>Roles: {roles}</Text>

        <Text style={{ color: colors.priT }}>Test User Profile Here</Text>
        <Pressable
          onPress={() => navigation.navigate("Connected Users")}
          style={[
            globalStyles.button,
            globalStyles.vertMargin,
            { backgroundColor: colors.triC, marginBottom: 25 },
          ]}
        >
          <Text style={globalStyles.buttonText}>Connected Users</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("My Profile")}
          style={[
            globalStyles.button,
            globalStyles.vertMargin,
            { backgroundColor: colors.triC, marginBottom: 25 },
          ]}
        >
          <Text style={globalStyles.buttonText}>My Profile</Text>
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
