import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SelectStatusComponent() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userProfile}
        source={require("../../assets/test.jpg")}
      />
      <AntDesign
        name="pluscircle"
        size={24}
        style={styles.plusCircle}
        color="#128C7E"
      />
      <View style={{ marginLeft: 10, marginTop: 12 }}>
        <Text style={styles.Text1}>My Status</Text>
        <Text style={styles.Text2}>Tap to add status update</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingTop: 10,
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    width: "80%",
    paddingLeft: 10,
  },
  userProfile: {
    borderRadius: 50,
    width: 60,
    height: 60,
    zIndex: 9,
    opacity: 1,
  },
  Text1: {
    color: "black",
    fontSize: 17,
    paddingLeft: 10,
  },
  Text2: {
    fontSize: 14,
    color: "grey",
    paddingLeft: 10,
    paddingTop: 3
  },
  plusCircle: {
    marginTop: 40,
    marginLeft: 50,
    zIndex: 999,
    position: "absolute",
  },
});
