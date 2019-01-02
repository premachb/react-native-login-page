import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {userNameText: "", passwordText: ""};
    }

    handleLoginPressed () {
        console.log("time to login!");
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput onChangeText={(text) => this.setState({userNameText: text})} style={styles.textInput} placeholder="Username" autoCorrect={false} autocapitalize="none" value={this.state.userNameText} />
                <TextInput onChangeText={(text) => this.setState({passwordText: text})} style={styles.textInput} placeholder="Password" autoCorrect={false} autocapitalize="none" value={this.state.passwordText} />
                <Button title="Login" onPress={this.handleLoginPressed} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: '#d1d1d1',
        width: '100%',
        marginBottom: 10,
        padding: 20,
    }
});