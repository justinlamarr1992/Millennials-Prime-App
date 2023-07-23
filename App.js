import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bowser", key: "7" },
    { name: "donkey kong", key: "8" },
    { name: "diddy kong", key: "9" },
  ]);

  return (
    <View style={styles.container}>
      {/* Better for performance */}
      <FlatList
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* 
      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
