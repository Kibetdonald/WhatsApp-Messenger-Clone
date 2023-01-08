import { View, Text, FlatList, StyleSheet, Image, ScrollView, Pressable} from "react-native";
import React from "react";
import chats from "../data/calls.json";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import SelectStatusComponent from "../components/SelectStatusComponent";
import {useNavigation} from "@react-navigation/native"

export default function StatusScreen() {
  const navigation = useNavigation()
  const Item = ({ name, image, time, status }) => (
    <Pressable onPress={()=>{
      navigation.navigate("status", {image, name, time, status})
    }}>
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
    </Pressable>
  );
  const renderItem = ({ item }) => (
    <Item name={item.user.name} image={item.user.image} time={item.user.time} status={item.user.status} />
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
