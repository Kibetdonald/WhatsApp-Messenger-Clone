import { View, Text, FlatList, StyleSheet, Image, ScrollView} from "react-native";
import React from "react";
import chats from "../data/calls.json";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import SelectStatusComponent from "../components/SelectStatusComponent";

const Item = ({ name, image, time }) => (
  <View style={styles.item}>
    <Image
      style={styles.userProfile}
      source={{
        uri: image,
      }}
    />
    <View style={styles.leftContent}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
            width: 50,
          }}
        >
          <Text>Today,</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  </View>
);
export default function StatusScreen() {
  const renderItem = ({ item }) => (
    <Item name={item.user.name} image={item.user.image} time={item.user.time} />
  );

  return (
    <View>
      <SelectStatusComponent />
      <Text style={styles.TitleText}>Recent updates</Text>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
  },
  TitleText: {
    fontSize: 13,
    color: "grey",
    paddingLeft: 10,
    paddingTop: 4
  },
  userProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  content: {
    fontSize: 16,
    color: "grey",
    paddingTop: 7,
  },
  leftContent: {
    paddingLeft: 20,
    width: "75%",
  },
  time: {
    fontSize: 14,
  },
});
