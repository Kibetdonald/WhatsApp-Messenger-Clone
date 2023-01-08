import { View, Dimensions, StyleSheet, ImageBackground, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatHeader from "../components/ChatHeader";
import { AntDesign } from '@expo/vector-icons'; 
import StatusHeader from "../components/StatusHeader";

const {height, width}= Dimensions.get("window")

export default function ViewStatus() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: route.params.status }}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusHeader />
        <View style={styles.ReplyStatus}>
        <AntDesign style={styles.reply} name="up" size={32} color="black" />
        <Text style={styles.replyText}>Reply</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
  StatusImage: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  ReplyStatus:{
    marginTop: height/1.4,
    alignItems: "center"
  },
  reply:{
    color: "#fff",
  
  },
  replyText:{
    color: "#fff",
    fontSize: 24,
    fontWeight: '400'
  }
});
