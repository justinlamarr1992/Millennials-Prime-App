import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { globalStyles } from "../../../styles/global";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

export default function ConnectedUsersScreen() {
  const axiosPrivate = useAxiosPrivate();
  const { auth, id, accessToken, roles } = useContext(AuthContext);
  const colors = useTheme().colors;

  const getUsers = async () => {
    try {
      const response = await axiosPrivate.get(
        `https://us-central1-millennialsprime.cloudfunctions.net/api/users/`
      );
      console.log(response);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };
  getUsers();
  return (
    <View>
      <Text style={{ color: colors.priT }}>ConnectedUsers</Text>
    </View>
  );
}
