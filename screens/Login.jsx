/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleLogin as _handleLogin } from '../store/actions/auth';

import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        const { username, password } = this.state;
        this.props.handleLogin(username, password);
    }

    render() {
        return (
            <MainLayout>
                <Text>{this.props.jwt}</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title="Login"
                    style={styles.input}
                    onPress={this.onLogin}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Register')}
                    title="Registrer"
                    color="#841584"
                />
            </MainLayout>
        );
    }
}

const mapStateToProps = state => ({
    jwt: state.auth.jwt,
});

const ConnectedContent = connect(
    mapStateToProps,
    { handleLogin: _handleLogin },
)(Login);

export default ConnectedContent;
