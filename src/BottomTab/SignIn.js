import React, { useState, useEffect } from "react";
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
import { WebView } from "react-native-webview";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import UserInfo from "./PostItems/UserInfo";

import axios from "axios";
// import colors from "../../styles/colors";

export default function SignIn() {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const colors = useTheme().colors;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={globalStyles.flex1}
    >
      <View style={[globalStyles.signInScreen]}>
        <View
          style={[
            globalStyles.registerButtonBox,
            globalStyles.padding,
            globalStyles.centerItem,
          ]}
        >
          <Pressable
            style={[globalStyles.button, { backgroundColor: colors.hexC }]}
            onPress={() => navigation.jumpTo("Register")}
          >
            <Text style={globalStyles.buttonText}>Create an Account</Text>
          </Pressable>
        </View>
        <View
          style={[
            globalStyles.signInForm,
            globalStyles.padding,
            globalStyles.loginForm,
            {
              backgroundColor: colors.background,
              borderColor: colors.borderColor,
            },
          ]}
        >
          <View style={globalStyles.formTitle}>
            <Text style={[globalStyles.titleText, { color: colors.text }]}>
              Welcome Back
            </Text>
            <Text style={globalStyles.labelText}>Sign in to Continue</Text>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>Email</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Email"
            ></TextInput>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Password"
              secureTextEntry={true}
            ></TextInput>
          </View>

          <Pressable
            style={[
              globalStyles.button,
              globalStyles.vertMargin,
              { backgroundColor: colors.triC },
            ]}
          >
            <Text style={globalStyles.buttonText}>Login</Text>
          </Pressable>
          <Text style={[globalStyles.vertPadding, { color: colors.linkC }]}>
            Forgot Passord Link
          </Text>
          {/* <Text>Connect with Socials</Text> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
