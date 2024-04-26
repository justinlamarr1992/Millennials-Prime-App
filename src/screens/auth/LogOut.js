import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { globalStyles } from "../../../styles/global";
import { AuthContext } from "../../context/AuthContext";

export default function LogOut() {
  const { login, logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const colors = useTheme().colors;

  return (
    <View>
      <Text style={{ color: colors.priT }} onPress={logout}>
        Log Out
      </Text>
    </View>
  );
}
