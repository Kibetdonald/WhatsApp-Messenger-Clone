import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatHeader() {
    const navigation = useNavigation();
    const goBack = () => {
      navigation.push("header");
    };
  return (
    <View style={styles.container}>
      <View style={styles.rightHeader}>
        <Ionicons style={{paddingTop: 12}} onPress={goBack} name="arrow-back-outline" size={28} color="black" />
        <Image
        style={styles.profile}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
      />
      <Text style={styles.ProfileName}>Doreen</Text>
      </View>
      <View style={styles.leftHeader}>
        <Ionicons name="md-videocam-outline" size={26} color="white" />
        <View style={{ width: 20 }} />
        <FontAwesome name="phone" size={26} color="white" />
        <View style={{ width: 20 }} />
        <MaterialIcons name="more-vert" size={24} color="white" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    height: 120,
    marginTop: -20,
    width: "100%",
    backgroundColor: "#128C7E",
    paddingLeft: 10,
    paddingRight: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftHeader: {
    flexDirection: "row",
  },
  rightHeader: {
    flexDirection: "row",
  },
  profile:{
    borderRadius: 50,
    width: 50,
    paddingTop: -10,
    marginLeft: 10,
  },
  ProfileName:{
    color: "#fff",
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 20
  }
});
