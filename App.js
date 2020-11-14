import React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";

import { MainRouter } from "./src/routers";
import theme from "./src/config/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}
