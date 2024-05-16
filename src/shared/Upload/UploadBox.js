import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useRef, useContext } from "react";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "@react-navigation/native";
import { globalStyles } from "../../../styles/global";
import { AuthContext } from "../../context/AuthContext";

export default function UploadBox() {
  // AuthContext
  const { id } = useContext(AuthContext);
  const _id = id;

  //   var tus = require("tus-js-client");

  // Use States
  const [upload, setUpload] = useState(null);
  const [uploadPicker, setUploadPicker] = useState(false);
  const [userPosting, setUserPosting] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prime, setPrime] = useState(0);
  const [primePicker, setPrimePicker] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryPicker, setCategoryPicker] = useState(false);
  const [duration, setDuration] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videoID, setVideoID] = useState("");
  const [object, setObject] = useState({
    userPosting,
    title,
    description,
    prime,
    category,
    duration,
    thumbnail,
  });

  //   Use Refs
  const uploadRef = useRef(false);
  const colors = useTheme().colors;

  const toggleUploadPicker = () => {
    setUploadPicker(!uploadPicker);
  };
  const togglePrimePicker = () => {
    setPrimePicker(!primePicker);
  };
  const toggleCategoryPicker = () => {
    setCategoryPicker(!categoryPicker);
  };

  const uploadCheck = (e) => {
    setUploadPicker(false);
    console.log(e);
    if (e == "Text") {
      setUpload("Text");
    } else if (e == "Images") {
      setUpload("Images");
    } else if (e == "Video") {
      setUpload("Video");
      try {
        const options = {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/*+json",
            // Test
            AccessKey: "8ad268ac-6b0a-46fb-92d9b1a6d918-c4e1-4edf",
            // Live
            // AccessKey: "a80779d4-9931-4345-80c1ca2315d2-fc09-4143",
          },
          // body: `{"title":"(Pre upload) Creating Video ${title} ${new Date()}"}`,
          body: `{"title":"${title} ${new Date()}","metaTags":[{"property":"description","value":"${description}"}, {"property":"prime","value":"${prime}"},{"property":"category","value":"${category}"},{"property":"userPosting","value":"${_id}"}]}`,
        };

        fetch("https://video.bunnycdn.com/library/181057/videos", options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setVideoID(response.guid);
            console.log("This is the videoID", videoID, new Date());
          });
      } catch (err) {
        console.log("ERROR", err);
      }

      // console.log(upload);
    } else if (e == "Music") {
      setUpload("Music");
    } else if (e == "Episode") {
      setUpload("Episode");
    } else if (e == "E-Commerence") {
      setUpload("E-Commerence");
    }
  };
  const handleChangeTitle = (e) => {
    // console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value);
    setObject({ ...object, title: title });
  };
  const handleChangeDescription = (e) => {
    // console.log(e.currentTarget.value);
    setDescription(e.currentTarget.value);
    setObject({ ...object, description: description });
  };
  const handleWhoChange = (e) => {
    setPrime(e);
    setObject({ ...object, prime: prime });
    setPrimePicker(false);
  };
  const handleCategoryChange = (e) => {
    setCategory(e);
    setObject({ ...object, category: category });
    setCategoryPicker(false);
  };
  const handleSubmit = () => {};

  return (
    <View style={[globalStyles.uploadBox, globalStyles.borderDefault]}>
      <Text style={[globalStyles.titleText, {}]}>
        Millennial's Prime News Upload
      </Text>
      <View style={globalStyles.groupPadding}>
        <View style={globalStyles.labelInput}>
          <Text style={globalStyles.labelText}>
            What type of Upload is this?
          </Text>
          <Pressable>
            <TextInput
              style={globalStyles.input}
              placeholder="Can Users Like your Post?"
              value={upload}
              //   onChangeText={setUpload}
              //   onChange={handleChange}
              editable={false}
              onPressIn={toggleUploadPicker}
            ></TextInput>
          </Pressable>

          {uploadPicker && (
            <Picker
              style={{}}
              ref={uploadRef}
              selectedValue={upload}
              onValueChange={(itemValue, itemIndex) => uploadCheck(itemValue)}
            >
              <Picker.Item
                label="Select your Option"
                value=""
                enabled="false"
              />
              <Picker.Item label="Text" value="Text" />
              {/* Later change TEXT to post or something like  words idk */}
              <Picker.Item label="Images" value="Images" />
              <Picker.Item label="Video" value="Video" />
              <Picker.Item label="Music" value="Music" />
              <Picker.Item label="Episode" value="Episode" />
              <Picker.Item label="E-Commerence" value="E-Commerence" />
            </Picker>
          )}
        </View>
        {upload == "Text" && <Text>Text stuff goes here</Text>}
        {upload == "Images" && <Text>Images stuff goes here</Text>}
        {upload == "Video" && (
          <View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Title of Video</Text>
              <TextInput
                style={globalStyles.settingsInput}
                name="title"
                id="title"
                placeholder="Enter Title Here"
                value={title}
                onChangeText={(text) => setTitle(text)}
                onChange={handleChangeTitle}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>
                Description of the Video
              </Text>
              <TextInput
                style={globalStyles.settingsInput}
                name="description"
                id="description"
                placeholder="Enter A Brief Description Here"
                value={description}
                onChangeText={(text) => setDescription(text)}
                onChange={handleChangeDescription}
              ></TextInput>
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>Who is the Video For?</Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Select Your Option"
                  value={prime}
                  //   onChangeText={setUpload}
                  //   onChange={handleChange}
                  editable={false}
                  onPressIn={togglePrimePicker}
                ></TextInput>
              </Pressable>

              {primePicker && (
                <Picker
                  style={{}}
                  selectedValue={prime}
                  onValueChange={(itemValue, itemIndex) =>
                    handleWhoChange(itemValue)
                  }
                >
                  <Picker.Item
                    label="Select your Option"
                    value=""
                    enabled="false"
                  />
                  <Picker.Item label="Millennial's" value="Millennial's" />
                  <Picker.Item label="Primes" value="Primes" />
                </Picker>
              )}
            </View>
            <View style={globalStyles.labelInput}>
              <Text style={globalStyles.labelText}>
                What the Category of this Video?
              </Text>
              <Pressable>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Select your option"
                  value={category}
                  //   onChangeText={setUpload}
                  //   onChange={handleChange}
                  editable={false}
                  onPressIn={toggleCategoryPicker}
                ></TextInput>
              </Pressable>

              {categoryPicker && (
                <Picker
                  style={{}}
                  selectedValue={category}
                  onValueChange={
                    (itemValue, itemIndex) => handleCategoryChange(itemValue)
                    // console.log("Category picker working")
                  }
                >
                  <Picker.Item
                    label="Select your Option"
                    value=""
                    enabled="false"
                  />
                  <Picker.Item label="All News" value="All News" />
                  <Picker.Item label="Music" value="Music" />
                  <Picker.Item label="Movie's" value="Movie's" />
                  <Picker.Item label="Politics" value="Politics" />
                  <Picker.Item label="Good Stuff" value="Good Stuff" />
                  <Picker.Item label="Prime Stuff" value="Prime Stuff" />
                </Picker>
              )}
            </View>
          </View>
        )}
        {upload == "Music" && <Text>Music stuff goes here</Text>}
        {upload == "Episode" && <Text>Episode stuff goes here</Text>}
        {upload == "E-Commerence" && <Text>E-Commerence stuff goes here</Text>}
      </View>
      {/* Button */}
      <View style={globalStyles.groupPadding}>
        <Pressable
          style={[
            globalStyles.button,
            globalStyles.vertMargin,
            { backgroundColor: colors.triC, marginBottom: 25 },
          ]}
        >
          <Text style={globalStyles.buttonText} onPress={handleSubmit}>
            Upload
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
