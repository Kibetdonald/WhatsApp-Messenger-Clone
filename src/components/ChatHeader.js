import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function ChatHeader() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.push("header");
  };
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.rightHeader}>
        <Ionicons
          style={{ paddingTop: 4 }}
          onPress={goBack}
          name="arrow-back-outline"
          size={22}
          color="#fff"
        />
        <Image
          style={styles.profile}
          source={{
            uri: route.params.image,
          }}
        />
        <Text style={styles.ProfileName}>{route.params.name}</Text>
     
      </View>
      <View style={styles.leftHeader}>
        <Ionicons name="md-videocam-outline" size={26} color="white" />
        <View style={{ width: 20 }} />
        <FontAwesome name="phone" size={26} color="white" />

        <View style={{ width: 20 }} />

        <Pressable
          onPress={() => navigation.navigate("Modal")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <MaterialIcons name="more-vert" size={24} color="white" />
        </Pressable>
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
  profile: {
    borderRadius: 50,
    resizeMode: 'stretch',
    width: 45,
    height: 45,
    marginLeft: 10,
  },
  ProfileName: {
    color: "#fff",
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
});
