import React, { useState, useEffect, useContext } from "react";
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
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext.js";

import Ad from "../shared/Ad.js";
import PrimeNewsPost from "../shared/PostComponents/PrimeNewsPost.js";

import { globalStyles } from "../../styles/global.js";
import { MaterialIcons } from "@expo/vector-icons";

import axios from "axios";
import ConnectedUsers from "./social/ConnectedUsersScreen.js";
import User from "./social/UserScreen.js";

export default function HomeScreen() {
  const { logout, test, auth, id, accessToken, roles } =
    useContext(AuthContext);
  // console.log(roles);

  const navigation = useNavigation();
  const colors = useTheme().colors;
  const [prime, setPrime] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  // const [reviews, setReviews] = useState([
  //   { title: "Title 1", rating: 5, body: "Body 1111111", key: "1" },
  //   { title: "Title 2", rating: 4, body: "Body 2222222", key: "2" },
  //   { title: "Title 3", rating: 3, body: "Body 3333333", key: "3" },
  // ]);

  const [post, setPost] = useState({
    title: "",
    description: "",
    guid: "",
    dateUploaded: "",
    videoLibraryId: "",
    key: "1",
  });
  const name = "Millennial's Prime Admin";

  useEffect(() => {
    getInfo();
  }, []);

  // MAke this into a function that can call API calls instead of typing every time
  // function AxiosExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // define an async function that fetches and processes the data
  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     // use Axios to make a GET request to the JSON placeholder API
  //     const response = axios.get(
  //       "https://us-central1-millennialsprime.cloudfunctions.net/api/test/app"
  //     );
  //     console.log(response);
  //     setData(response);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // HOW TO ADD FUTURE POST IN TO SOCIAL
  // const addReview = (review) => {
  //   // Not best way to producw a key
  //   review.key = Math.random().toString();
  //   setReviews((currentReviews) => {
  //     return [review, ...currentReviews];
  //   });
  //   setModalOpen(false);
  // };

  const getInfo = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // Test
        AccessKey: "8ad268ac-6b0a-46fb-92d9b1a6d918-c4e1-4edf",
        // Live
        // AccessKey: "a80779d4-9931-4345-80c1ca2315d2-fc09-4143",
      },
    };

    fetch(
      "https://video.bunnycdn.com/library/181057/videos?page=1&itemsPerPage=2&orderBy=date",
      options
    )
      .then((response) => response.json())
      // .then((response) => console.log(response.items[0]))
      .then((response) =>
        // console.log(
        //   "Testing Response on EXPO",
        //   JSON.stringify(response, null, 3)
        // ),
        setPost({
          title: response.items[0].title,
          // description: response.items[0].metaTags[0].value,
          guid: response.items[0].guid,
          dateUploaded: response.items[0].dateUploaded,
          videoLibraryId: response.items[0].videoLibraryId,
        })
      )
      .catch((err) => console.error(err));
  };

  return (
    <View style={{ color: colors.background }}>
      {/* <View style={globalStyles.container}> */}
      {/* <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...globalStyles.modalToggle,
                ...globalStyles.modalClose,
              }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyles.padding]}>
          <PrimeNewsPost
            prime={prime}
            title={post.title}
            description={post.description}
            name={name}
            time={post.dateUploaded}
            guid={post.guid}
            videoLibraryId={post.videoLibraryId}
          />
          <Ad />

          {/* <Text style={{ color: colors.priT }} onPress={logout}>
            Log Out
          </Text> */}
          {/* <Text
            style={{ color: colors.priT }}
            onPress={() => navigation.navigate("About")}
          >
            About
          </Text> */}
          <Text
            style={{ color: colors.priT }}
            onPress={() => navigation.navigate("My Info")}
          >
            My Info x
          </Text>
          {/* <Text
            style={{ color: colors.priT }}
            onPress={() => navigation.navigate("Business")}
          >
            Business
          </Text>
          <Text
            style={{ color: colors.priT }}
            onPress={() => navigation.navigate("Art")}
          >
            Art
          </Text> */}

          {id ? (
            <Text style={{ color: colors.hexC }}>ID is ood</Text>
          ) : (
            <Text style={{ color: colors.triC }}>No ID</Text>
          )}
          {roles ? (
            <Text style={{ color: colors.hexC }}>Roles is Good</Text>
          ) : (
            <Text style={{ color: colors.triC }}>No Roles</Text>
          )}
          {accessToken ? (
            <Text style={{ color: colors.hexC }}>AccessToken is Good</Text>
          ) : (
            <Text style={{ color: colors.triC }}>No AccessToken</Text>
          )}
          {auth ? (
            <Text style={{ color: colors.hexC }}>Auth Information is Good</Text>
          ) : (
            <Text style={{ color: colors.triC }}>No Auth Information</Text>
          )}

          {/* TEst Back End Button Here */}
          {/* <Button title="Test Back End" onPress={pressBackEndTest} /> */}
          {/* <Button title="Test Components" onPress={pressHandler} /> */}

          {/* <Text>{error ? error : "We Working BABY"}</Text> */}
        </View>
      </ScrollView>
    </View>
  );
}
