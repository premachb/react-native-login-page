import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import FirebaseAuthenticator from "../login";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userNameText: "", passwordText: "" };
    this.firebaseAuthenticator = new FirebaseAuthenticator();
    this.transitionToLoggedInPage.bind(this);
  }

  transitionToLoggedInPage(firebaseObject) {
    this.props.navigation.navigate("Profile", {
      user: firebaseObject.user
    });
  }

  handleLoginPressed() {
    const result = this.firebaseAuthenticator
      .authenticateUser(this.state.userNameText, this.state.passwordText)
      .then(user => this.transitionToLoggedInPage(user))
      .catch(err => console.error(err));
  }

  handleCreateUserPressed() {
    this.props.navigation.navigate("CreateUser");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ userNameText: text })}
          style={styles.textInput}
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="none"
          value={this.state.userNameText}
        />
        <TextInput
          onChangeText={text => this.setState({ passwordText: text })}
          style={styles.textInput}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          value={this.state.passwordText}
        />
        <Button title="Login" onPress={this.handleLoginPressed.bind(this)} />
        <Button
          title="Create User"
          onPress={this.handleCreateUserPressed.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    backgroundColor: "#d1d1d1",
    width: "100%",
    marginBottom: 10,
    padding: 20
  }
});
