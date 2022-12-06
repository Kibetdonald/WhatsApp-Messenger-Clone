import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/MessageScreen";
import StatusScreen from "../screens/StatusScreen";
import GroupsScreen from "../screens/GroupsScreen";
import CallsScreen from "../screens/CallsScreen";
import CameraScreen from "../screens/CameraScreen";
import ChatScreen from "../screens/ChatScreen";
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function HeaderComponent() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>WhatsApp</Text>
          <View style={styles.leftHeader}>
            <MaterialIcons name="wifi-off" size={24} color="white" />
            <View style={{ width: 20 }} />
            <Ionicons name="moon" size={24} color="white" />
            <View style={{ width: 20 }} />
            <Feather name="search" size={24} color="white" />
            <View style={{ width: 20 }} />
            <MaterialIcons name="more-vert" size={24} color="white" />
          </View>
        </View>
      </View>

      <View style={{ height: 780 }}>
          <Tab.Navigator
            initialRouteName="Message"
            screenOptions={{
              tabBarActiveTintColor: "#fff",
              tabBarLabelStyle: { fontSize: 12, color: "#fff" },
              tabBarStyle: { backgroundColor: "#128C7E" },
            }}
          >
            <Tab.Screen
              name="Camera"
              component={CameraScreen}
              options={{ tabBarLabel: "CAMERA" }}
            />

            <Tab.Screen
              name="Message"
              component={MessageScreen}
              options={{ tabBarLabel: "Message" }}
            />
            <Tab.Screen
              name="Groups"
              component={GroupsScreen}
              options={{ tabBarLabel: "GROUPS" }}
            />
            <Tab.Screen
              name="Status"
              component={StatusScreen}
              options={{ tabBarLabel: "STATUS" }}
            />

            <Tab.Screen
              name="Calls"
              component={CallsScreen}
              options={{ tabBarLabel: "CALLS" }}
            />
          </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: -20,
    width: "100%",
    backgroundColor: "#128C7E",
    paddingLeft: 10,
    paddingRight: 4,
  },
  headerRow: {
    flexDirection: "row",
    paddingTop: 80,
    justifyContent: "space-between",
  },
  leftHeader: {
    flexDirection: "row",
    // justifyContent: "space-betweeen",
    // marginLeft: 20
  },
  headerText: {
    fontSize: 25,
    color: "#fff",
    marginLeft: 10,
    fontWeight: "bold",
  },
});
