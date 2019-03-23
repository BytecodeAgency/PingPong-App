/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleRegister as _handleRegister } from '../store/actions/auth';

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

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.onRegister = this.onRegister.bind(this);
    }

    onRegister() {
        const { username, password } = this.state;
        this.props.handleRegister(username, password);
    }

    render() {
        return (
            <MainLayout>
                <Text>{this.props.jwt}</Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder="Email"
                    style={styles.input}
                />
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
                    title="Register"
                    style={styles.input}
                    onPress={this.onRegister}
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
    { handleRegister: _handleRegister },
)(Register);

export default ConnectedContent;
