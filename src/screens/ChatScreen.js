import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

export default function ChatScreen() {
  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <HeaderComponent />
      <Text>Chat here</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // justifyContent: "center",
  },
});
