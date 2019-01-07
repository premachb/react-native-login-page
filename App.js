import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/LoginScreen";
import UserDetails from "./components/UserDetails";

const AppNavigator = createStackNavigator({
  Home: { screen: LoginScreen },
  Profile: { screen: UserDetails }
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
