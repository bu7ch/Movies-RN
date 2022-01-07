import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./components/MainNavigation";
import "react-native-gesture-handler"

const App = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);

export default App;
