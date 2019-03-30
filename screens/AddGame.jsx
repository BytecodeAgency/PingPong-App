/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addGame as _addGame } from '../store/actions/game';

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

class AddGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: '',
            score1: '',
            score2: '',
        };
        this.onCreate = this.onCreate.bind(this);
    }

    onCreate() {
        const { player1, player2, score1, score2 } = this.state;
        this.props.addGame(player1, player2, score1, score2);
    }

    render() {
        return (
            <MainLayout>
                <TextInput
                    value={this.state.player1}
                    onChangeText={player1 => this.setState({ player1 })}
                    placeholder="Player One"
                    style={styles.input}
                />
                <TextInput
                    value={this.state.player2}
                    onChangeText={player2 => this.setState({ player2 })}
                    placeholder="Player Two"
                    style={styles.input}
                />
                <TextInput
                    value={this.state.score1}
                    keyboardType="numeric"
                    onChangeText={score1 => this.setState({ score1 })}
                    placeholder="Score One"
                    style={styles.input}
                />
                <TextInput
                    value={this.state.score2}
                    keyboardType="numeric"
                    onChangeText={score2 => this.setState({ score2 })}
                    placeholder="Score Two"
                    style={styles.input}
                />
                <Button
                    title="Add Game"
                    style={styles.input}
                    onPress={this.onCreate}
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
    { addGame: _addGame },
)(AddGame);

export default ConnectedContent;
