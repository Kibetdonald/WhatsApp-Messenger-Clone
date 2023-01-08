import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "./src/screens/ChatScreen";
import MessageScreen from "./src/screens/MessageScreen";
import HeaderComponent from "./src/components/HeaderComponent";
import ModalComponent from "./src/components/ModalComponent";
import ViewStatus from "./src/screens/ViewStatus";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="header"
            component={HeaderComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="chat"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
             <Stack.Screen
            name="status"
            component={ViewStatus}
            options={{ headerShown: false }}
          />
           <Stack.Screen name="Modal" component={ModalComponent} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
