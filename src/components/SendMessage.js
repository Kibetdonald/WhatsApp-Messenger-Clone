import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Entypo, FontAwesome, AntDesign} from "@expo/vector-icons";

export default function SendMessage() {
  return (
    <View style={{flexDirection: "row"}}>
      <View style={styles.messageBar}>
        <Entypo
          name="emoji-happy"
          size={24}
          color="grey"
          style={{ paddingLeft: 10 }}
        />
        <TextInput style={styles.input} placeholder="Message" />
        <AntDesign name="addfile" size={22} color="grey"   style={{ marginLeft: -40 }}/>
       
        
     <Entypo name="camera" size={24} color="grey"   style={{ marginLeft: 10 }}/>
      </View>
      <FontAwesome name="microphone" size={24} color="black" style={{paddingTop: 25 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  messageBar: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
    borderRadius: 15,
    height: 50,
    backgroundColor: "#fff"
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "80%",
  },
});
