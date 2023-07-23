import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Build App", key: "1" },
    { text: "Build Website", key: "2" },
    { text: "Fish for Clients", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* ToDo Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
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
});
