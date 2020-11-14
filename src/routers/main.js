import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, DetailsScreen } from "../screens";

const Stack = createStackNavigator();

export default function MainRouter() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
