import React, { useState } from "react";
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
} from "react-native";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Title 1", rating: 5, body: "Body 1111111", key: "1" },
    { title: "Title 2", rating: 4, body: "Body 2222222", key: "2" },
    { title: "Title 3", rating: 3, body: "Body 3333333", key: "3" },
  ]);

  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  //   // navigation.push("ReviewDetails");
  // };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={globalStyles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm />
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      {/* <Button onPress={()=> }/> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card>
              <Text
                style={globalStyles.titleText}
                onPress={() => navigation.navigate("ReviewDetails", { item })}
              >
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//  <TouchableWithoutFeedback
//    onPress={() => {
//      Keyboard.dismiss();
//      console.log("Dismissed Keyboard");
//    }}
//  >
//    <View style={styles.container}>
//      <Header />
//      {/* Header */}
//      <Text>Starting Over</Text>
//    </View>
//  </TouchableWithoutFeedback>;
