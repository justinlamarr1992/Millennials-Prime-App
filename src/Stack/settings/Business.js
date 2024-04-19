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
  KeyboardAvoidingView,
  Alert,
  Modal,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import UserInfo from "./PostItems/UserInfo";

import axios from "axios";

export default function Business() {
  const navigation = useNavigation();
  const colors = useTheme().colors;
  const [modalOpen, setModalOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [canLike, setCanLike] = useState(null);
  const [canDislike, setCanDislike] = useState(null);
  const [canComment, setCanComment] = useState(null);
  const [canShare, setCanShare] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [B2B, setB2B] = useState(null);
  const [eComm, setEComm] = useState(null);
  const [upload, setUpload] = useState(null);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);

    // Text Input for the Picker
    // <Pressable>
    //   <TextInput
    //     style={globalStyles.input}
    //     placeholder=""
    //     value={}
    //     onChangeText={}
    //     editable={false}
    //     onPressIn={toggle_Picker}
    //   ></TextInput>
    // </Pressable>;

    // Conditional to open Picker
    // {_Picker && ()}
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

  const handleSubmit = async (e) => {
    try {
      console.log("Started the try to submit Business Stuff");
    } catch (err) {
      console.log("ERR", err);
    } finally {
      console.log("It worked!!!");
      // navigation.jumpTo("Business");
      navigation.navigate("Art");
    }
    console.log("Handle Submit pressed");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={globalStyles.flex1}
    >
      <View>
        <ScrollView
          style={[globalStyles.padding, globalStyles.marginB100, {}]}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.formTitle}>
            <Text style={globalStyles.titleText}>Business Information</Text>
            <Text style={globalStyles.labelText}>
              Edit your Business information
            </Text>
          </View>
          <View style={globalStyles.groupPadding}>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Do you have a Business</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={canLike}
                onValueChange={(itemValue, itemIndex) => setCanLike(itemValue)}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
          </View>
          <View style={globalStyles.groupPadding}>
            {/* Company Logo and Change Logo stuff here */}
          </View>
          <View style={globalStyles.groupPadding}>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Name</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter Name"
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Username</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter Username"
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Email</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter Email"
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Birthday</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter Birthday"
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View>
          <View style={globalStyles.groupPadding}>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Country</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter Country"
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>State</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter State"
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>City</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter City"
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Zip</Text>
              <TextInput
                style={globalStyles.settingsInput}
                placeholder="Enter Zip"
              ></TextInput>
            </View>
          </View>
          <View style={globalStyles.groupPadding}>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Like</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={canLike}
                onValueChange={(itemValue, itemIndex) => setCanLike(itemValue)}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Dislike</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={canDislike}
                onValueChange={(itemValue, itemIndex) =>
                  setCanDislike(itemValue)
                }
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Comment</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={canComment}
                onValueChange={(itemValue, itemIndex) =>
                  setCanComment(itemValue)
                }
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Share</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={canShare}
                onValueChange={(itemValue, itemIndex) => setCanShare(itemValue)}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
          </View>
          <View style={globalStyles.groupPadding}>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Industry</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={industry}
                onValueChange={(itemValue, itemIndex) => setIndustry(itemValue)}
              >
                <Picker.Item label="Architecture" value="architecture" />
                <Picker.Item label="Education" value="education" />
                <Picker.Item label="Engineering" value="engineer" />
                <Picker.Item
                  label="Financial Services & Insurance"
                  value="financial"
                />
                <Picker.Item label="Government" value="government" />
                <Picker.Item
                  label="Healthcare & Pharmaceutical"
                  value="healthcare"
                />
                <Picker.Item label="Hospitality" value="hospitality" />
                <Picker.Item
                  label="Manufacturing/ Industrial"
                  value="manufacturing"
                />
                <Picker.Item label="Marketing" value="marketing" />
                <Picker.Item label="Media & Entertainment" value="media" />
                <Picker.Item label="Non-Profit" value="nonprofit" />
                <Picker.Item
                  label="Professional Services"
                  value="professional"
                />
                <Picker.Item
                  label="Retail & Consumer Products"
                  value="retail"
                />
                <Picker.Item label="Sports" value="sports" />
                <Picker.Item label="Tech" value="tech" />
                <Picker.Item
                  label="Telecommunications"
                  value="telecommunications"
                />
                <Picker.Item label="Transportation" value="transportation" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>
                Looking for B2B Relationships
              </Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={B2B}
                onValueChange={(itemValue, itemIndex) => setB2B(itemValue)}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>E-Commerence</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={eComm}
                onValueChange={(itemValue, itemIndex) => setEComm(itemValue)}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Upload Content</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Picker
                selectedValue={upload}
                onValueChange={(itemValue, itemIndex) => setUpload(itemValue)}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
          </View>
          <View style={globalStyles.groupPadding}>
            <Pressable
              style={[
                globalStyles.button,
                globalStyles.vertMargin,
                { backgroundColor: colors.triC, marginBottom: 25 },
              ]}
            >
              <Text style={globalStyles.buttonText} onPress={handleSubmit}>
                Save Changes
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
