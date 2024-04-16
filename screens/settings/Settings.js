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
  Pressable,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import UserInfo from "./PostItems/UserInfo";

import axios from "axios";

export default function Settings({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDateOfBirth(date.toDateString());
    toggleDatePicker();
  };

  return (
    <View style={[globalStyles.signInScreen]}>
      <View
        style={[
          globalStyles.loginButtonBox,
          globalStyles.padding,
          globalStyles.centerItem,
        ]}
      >
        <Pressable
          style={globalStyles.button}
          onPress={() => navigation.jumpTo("Sign In")}
        >
          <Text style={globalStyles.buttonText}>Login</Text>
        </Pressable>
      </View>
      <View
        style={[
          globalStyles.signInForm,
          globalStyles.padding,
          globalStyles.registerForm,
        ]}
      >
        <ScrollView>
          <View style={globalStyles.formTitle}>
            <Text style={globalStyles.titleText}>Create an Account</Text>
            <Text style={globalStyles.labelText}>Sign Up to Continue</Text>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>First Name</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter First Name"
              placeholderTextColor="#C4C4C4"
            ></TextInput>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>Last Name</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Last Name"
              placeholderTextColor="#C4C4C4"
            ></TextInput>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>Email</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Email"
              placeholderTextColor="#C4C4C4"
            ></TextInput>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Password"
              placeholderTextColor="#C4C4C4"
            ></TextInput>
          </View>
          <View style={globalStyles.labelInput}>
            <Text style={globalStyles.labelText}>Confirm Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#C4C4C4"
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
                style={{ flexDirection: "row", justifyContent: "space-around" }}
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
          <Pressable style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Create an Account</Text>
          </Pressable>
          <Text>Forgot Passord Link</Text>
          {/* <Text>Connect with Socials</Text> */}
        </ScrollView>
      </View>
    </View>
  );
}
