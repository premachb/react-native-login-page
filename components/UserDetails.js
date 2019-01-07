import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    const navigation = props.navigation;
    const firebaseUser = navigation.getParam("user");
    const firebaseUserToken = firebaseUser.ra;

    this.state = {
      user: firebaseUser,
      token: firebaseUserToken
    };
  }

  render() {
    return <Text>{this.state.user.email}</Text>;
  }
}
