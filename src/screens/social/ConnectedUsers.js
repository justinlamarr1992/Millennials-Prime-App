import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { globalStyles } from "../../../styles/global";

export default function ConnectedUsers() {
  const { auth, id, accessToken, roles } = useContext(AuthContext);
  return (
    <View>
      <Text>ConnectedUsers</Text>
    </View>
  );
}
