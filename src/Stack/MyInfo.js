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
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useTheme } from "@react-navigation/native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import UserInfo from "./PostItems/UserInfo";

import axios from "axios";

export default function MyInfo() {
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
  const [canLikePicker, setCanLikePicker] = useState(false);
  const [canDislikePicker, setCanDislikePicker] = useState(false);
  const [canCommentPicker, setCanCommentPicker] = useState(false);
  const [canSharePicker, setCanSharePicker] = useState(false);
  const [industryPicker, setIndustryPicker] = useState(false);
  const [B2BPicker, setB2BPicker] = useState(false);
  const [eCommPicker, setECommPicker] = useState(false);
  const [uploadPicker, setUploadPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const toggleCanLikePicker = () => {
    setCanLikePicker(!canLikePicker);
  };
  const toggleCanDislikePicker = () => {
    setCanDislikePicker(!canDislikePicker);
  };
  const toggleCanCommentPicker = () => {
    setCanCommentPicker(!canCommentPicker);
  };
  const toggleCanSharePicker = () => {
    setCanSharePicker(!canSharePicker);
  };
  const toggleIndustryPicker = () => {
    setIndustryPicker(!industryPicker);
  };
  const toggleB2BPicker = () => {
    setB2BPicker(!B2BPicker);
  };
  const toggleECommPicker = () => {
    setECommPicker(!eCommPicker);
  };
  const toggleUploadPicker = () => {
    setUploadPicker(!uploadPicker);
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
      console.log("Started the try to submit MyInfo Stuff");
    } catch (err) {
      console.log("ERR", err);
    } finally {
      console.log("It worked!!!");
      // navigation.jumpTo("Business");
      navigation.navigate("Business");
    }
    console.log("Handle Submit pressed");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={globalStyles.flex1}
    >
      <View style={[{ backgroundColor: colors.background }]}>
        <ScrollView
          style={[globalStyles.padding, globalStyles.marginB100, {}]}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.formTitle}>
            <Text style={[globalStyles.titleText, { color: colors.text }]}>
              Basic Information
            </Text>
            <Text style={globalStyles.labelText}>
              Edit your Profile information
            </Text>
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
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Can Users Like your Post?"
                  value={canLike}
                  onChangeText={setCanLike}
                  editable={false}
                  onPressIn={toggleCanLikePicker}
                ></TextInput>
              </Pressable>

              {canLikePicker && (
                <Picker
                  style={{}}
                  selectedValue={canLike}
                  onValueChange={(itemValue, itemIndex) =>
                    setCanLike(itemValue)
                  }
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Dislike</Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Can Users Dislike your Post"
                  value={canDislike}
                  onChangeText={setCanDislike}
                  editable={false}
                  onPressIn={toggleCanDislikePicker}
                ></TextInput>
              </Pressable>
              {canDislikePicker && (
                <Picker
                  selectedValue={canDislike}
                  onValueChange={(itemValue, itemIndex) =>
                    setCanDislike(itemValue)
                  }
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Comment</Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Can Users Comment on Your Post"
                  value={canComment}
                  onChangeText={setCanComment}
                  editable={false}
                  onPressIn={toggleCanCommentPicker}
                ></TextInput>
              </Pressable>
              {canCommentPicker && (
                <Picker
                  selectedValue={canComment}
                  onValueChange={(itemValue, itemIndex) =>
                    setCanComment(itemValue)
                  }
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Viewers Can Share</Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Can Users Share your Post"
                  value={canShare}
                  onChangeText={setCanShare}
                  editable={false}
                  onPressIn={toggleCanSharePicker}
                ></TextInput>
              </Pressable>
              {canSharePicker && (
                <Picker
                  selectedValue={canShare}
                  onValueChange={(itemValue, itemIndex) =>
                    setCanShare(itemValue)
                  }
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
            </View>
          </View>
          <View style={globalStyles.groupPadding}>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Your Industry</Text>
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Enter Email"
              ></TextInput> */}
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="What is the Industry you Operate in"
                  value={industry}
                  onChangeText={setIndustry}
                  editable={false}
                  onPressIn={toggleIndustryPicker}
                ></TextInput>
              </Pressable>
              {industryPicker && (
                <Picker
                  selectedValue={industry}
                  onValueChange={(itemValue, itemIndex) =>
                    setIndustry(itemValue)
                  }
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
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>
                Looking for B2B Relationships
              </Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Business to Business?"
                  value={B2B}
                  onChangeText={setB2B}
                  editable={false}
                  onPressIn={toggleB2BPicker}
                ></TextInput>
              </Pressable>
              {B2BPicker && (
                <Picker
                  selectedValue={B2B}
                  onValueChange={(itemValue, itemIndex) => setB2B(itemValue)}
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>E-Commerence</Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Would you like to Sell Items"
                  value={eComm}
                  onChangeText={setEComm}
                  editable={false}
                  onPressIn={toggleECommPicker}
                ></TextInput>
              </Pressable>
              {eCommPicker && (
                <Picker
                  selectedValue={eComm}
                  onValueChange={(itemValue, itemIndex) => setEComm(itemValue)}
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Upload Content</Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Do you have Cont to Upload"
                  value={upload}
                  onChangeText={setUpload}
                  editable={false}
                  onPressIn={toggleUploadPicker}
                ></TextInput>
              </Pressable>
              {uploadPicker && (
                <Picker
                  selectedValue={upload}
                  onValueChange={(itemValue, itemIndex) => setUpload(itemValue)}
                >
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              )}
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
