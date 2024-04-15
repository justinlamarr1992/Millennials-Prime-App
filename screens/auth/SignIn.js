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
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { WebView } from "react-native-webview";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import UserInfo from "./PostItems/UserInfo";

import axios from "axios";

export default function SignIn({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={[globalStyles.signInScreen]}>
      <View
        style={[
          globalStyles.registerButtonBox,
          globalStyles.padding,
          globalStyles.centerItem,
        ]}
      >
        <Pressable
          style={globalStyles.button}
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
        ]}
      >
        <View style={globalStyles.formTitle}>
          <Text style={globalStyles.titleText}>Welcome Back</Text>
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
          ></TextInput>
        </View>
        <View></View>
        <View></View>

        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </Pressable>
        <Text>Forgot Passord Link</Text>
        {/* <Text>Connect with Socials</Text> */}
      </View>
    </View>
  );
}
