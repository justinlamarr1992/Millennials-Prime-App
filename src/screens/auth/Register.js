import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import UserInfo from "./PostItems/UserInfo";

import axios from "axios";

const USER_REGEX = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
  const navigation = useNavigation();
  const colors = useTheme().colors;

  const [modalOpen, setModalOpen] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [DOB, setDOB] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        // setDateOfBirth(currentDate.toDateString());
        setDOB(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    // setDateOfBirth(date.toDateString());
    setDOB(date.toDateString());
    toggleDatePicker();
  };

  const handleSubmit = async (e) => {
    let dataToSubmit = {
      user,
      password,
      firstName,
      lastName,
      DOB,
    };

    try {
      const response = await axios.post(
        "https://us-central1-millennialsprime.cloudfunctions.net/api/register",
        dataToSubmit,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("in the try");
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setSuccess(true);
      setAuth({ user, password, accessToken });
      setUser("");
      setPassword("");
      setMatchPassword("");
      setDOB("");
    } catch (err) {
      console.log("ERROR ==>", err);
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Info");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized but its here");
      } else if (err.originalStatus === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Login Failed");
      }
      //   errRef.current.focus();
    } finally {
      // TODO: Check if good infor then go to settings page if not need errors to kick in
      navigation.navigate("Sign In");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={globalStyles.flex1}
    >
      <View style={[globalStyles.signInScreen]}>
        <View
          style={[
            globalStyles.loginButtonBox,
            globalStyles.padding,
            globalStyles.centerItem,
          ]}
        >
          <Pressable
            style={[globalStyles.button, { backgroundColor: colors.hexC }]}
            onPress={() => navigation.navigate("Sign In")}
          >
            <Text style={globalStyles.buttonText}>Login</Text>
          </Pressable>
        </View>
        <View
          style={[
            globalStyles.signInForm,
            globalStyles.padding,
            globalStyles.registerForm,
            globalStyles.bottomPadding,
            {
              backgroundColor: colors.background,
              borderColor: colors.borderColor,
            },
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={globalStyles.formTitle}>
              <Text style={[globalStyles.titleText, { color: colors.text }]}>
                Create an Account
              </Text>
              <Text style={globalStyles.labelText}>Sign Up to Continue</Text>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>First Name</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter First Name"
                placeholderTextColor="#C4C4C4"
                onChangeText={(text) => {
                  setFirstName(text);
                  console.log(firstName);
                }}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Last Name</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter Last Name"
                placeholderTextColor="#C4C4C4"
                onChangeText={(text) => {
                  setLastName(text);
                  console.log(lastName);
                }}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Email</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
                placeholderTextColor="#C4C4C4"
                keyboardType="email-address"
                onChangeText={(text) => {
                  setUser(text);
                  console.log(user);
                }}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Password</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter Password"
                placeholderTextColor="#C4C4C4"
                secureTextEntry={true}
                //   autoCorrect={false}
                onChangeText={(text) => {
                  setPassword(text);
                  console.log(password);
                }}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Confirm Password</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#C4C4C4"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setMatchPassword(text);
                  console.log(matchPassword);
                }}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>When were you Born</Text>
              {showPicker && (
                <DateTimePicker
                  style={globalStyles.datePicker}
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChange}
                  placeholderTextColor="#C4C4C4"
                  maximumDate={new Date("1997-1-1")}
                  minimumDate={new Date("1981-1-1")}
                />
              )}
              {/* IMPORTANT THE DATEPICKER TEXT COLOR IS OFF OF THE PHONE DAYTIME/NIGT PREF */}
              {showPicker && Platform.OS === "ios" && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    style={[globalStyles.button, globalStyles.cancelButton]}
                    onPress={toggleDatePicker}
                  >
                    <Text
                      style={[
                        globalStyles.buttonText,
                        globalStyles.cancelButtonText,
                      ]}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[globalStyles.button, globalStyles.confirmButton]}
                    onPress={confirmIOSDate}
                  >
                    <Text
                      style={[
                        globalStyles.buttonText,
                        globalStyles.confirmButtonText,
                      ]}
                    >
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {!showPicker && (
                <Pressable onPress={toggleDatePicker}>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Birthday"
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    editable={false}
                    onPressIn={toggleDatePicker}
                  />
                </Pressable>
              )}
            </View>
            <Pressable
              style={[
                globalStyles.button,
                globalStyles.vertMargin,
                { backgroundColor: colors.triC },
              ]}
            >
              <Text style={globalStyles.buttonText} onPress={handleSubmit}>
                Create an Account
              </Text>
            </Pressable>
            {/* <Text>Connect with Socials</Text> */}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
