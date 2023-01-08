import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import chats from "../data/groups.json";
import { useNavigation } from "@react-navigation/native";

export default function GroupScreen() {
  
const navigation = useNavigation();
const Item = ({ name, image, message, unread, time }) => (
  <Pressable
    onPress={() => {
      navigation.navigate("chat", { name, image });
    }}
  >
    <View style={styles.item}>
      <Image
        style={styles.userProfile}
        source={{
          uri: image,
        }}
      />
      <View style={styles.leftContent}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.content} numberOfLines={1}>
          {message}
        </Text>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>

        {unread == 0 ? (
          <Text></Text>
        ) : (
          <View style={styles.unreadView}>
            <Text style={styles.unread} numberOfLines={1}>
              {unread}
            </Text>
          </View>
        )}
      </View>
    </View>
  </Pressable>
);
  const renderItem = ({ item }) => (
    <Item
      name={item.user.name}
      image={item.user.image}
      message={item.lastMessage.text}
      unread={item.user.unread}
      time={item.user.time}
    />
  );

  return (
    <View>
      {/* <HeaderComponent /> */}
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
  unreadView: {
    borderRadius: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 8,
  },
  unread: {
    fontSize: 14,
    color: "#fff",
  },
});
