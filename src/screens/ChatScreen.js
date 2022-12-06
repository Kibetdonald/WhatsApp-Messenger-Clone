import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import ChatHeader from "../components/ChatHeader";
import messages from "../data/messages.json";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SendMessage from "../components/SendMessage";
dayjs.extend(relativeTime);

export default function ChatScreen() {
  const renderItem = ({ item }) => (
    <Item text={item.text} createdAt={item.createdAt} userId={item.userId} />
  );
  const Item = ({ text, createdAt, userId }) => (
    <View
      style={[
        styles.content,
        {
          backgroundColor: userId === "user1" ? "#DCF8C5" : "#FFF",
          alignSelf: userId === "user1" ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{text}</Text>
      <Text style={styles.time}>{dayjs(createdAt).fromNow(true)}</Text>
    </View>
  );
  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <ChatHeader />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <SendMessage />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  content: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  time: {
    alignSelf: "flex-end",
    color: "gray",
  },
});
