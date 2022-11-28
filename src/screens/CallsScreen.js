import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import chats from "../data/calls.json";
import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Item = ({ name, image, time, type }) => (
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
          {type == "caller" ? (
            <Feather name="arrow-up-right" size={14} color="green" />
          ) : (
            <MaterialCommunityIcons
              name="arrow-bottom-left-thin"
              size={14}
              color="red"
            />
          )}

          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
    <View>
    <MaterialIcons name="call" size={18} style={{ paddingTop: 12 }}
        color="grey"/>
     
    </View>
  </View>
);
export default function CallsScreen() {
  const renderItem = ({ item }) => (
    <Item name={item.user.name} image={item.user.image} time={item.user.time} type={item.user.type}/>
  );

  return (
    <View>
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
