import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import FirebaseAuthenticator from "../login";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNameText: "",
      userNameText: "",
      passwordText: ""
    };
    this.firebaseAuthenticator = new FirebaseAuthenticator();
  }

  handleCreateAccountPressed() {
    this.firebaseAuthenticator
      .createUser(this.state.userNameText, this.state.passwordText)
      .then(user => this.firebaseAuthenticator.updateUserDisplayName(user))
      .then(user =>
        this.props.navigation.navigate("Profile", {
          user: user
        })
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ displayNameText: text })}
          style={styles.textInput}
          placeholder="Display Name"
          autoCorrect={false}
          autoCapitalize="none"
          value={this.state.displayNameText}
        />
        <TextInput
          onChangeText={text => this.setState({ userNameText: text })}
          style={styles.textInput}
          placeholder="Email"
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
        <Button
          title="Create Account"
          onPress={this.handleCreateAccountPressed.bind(this)}
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
