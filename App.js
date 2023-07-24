import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Build App", key: "1" },
    { text: "Build Website", key: "2" },
    { text: "Fish for Clients", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "Check the List",
        "Your ToDo's need to be over 3 characters long",
        [{ text: "Understood", onPress: () => console.log("alert closed") }]
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Dismissed Keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        {/* Header */}
        <View style={styles.content}>
          {/* ToDo Form */}
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
    backgroundColor: "#fffd9b",
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
  },
});
