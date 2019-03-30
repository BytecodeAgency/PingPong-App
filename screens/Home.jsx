/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import PlusButton from '../components/PlusButton';

import MainLayout from '../layouts/MainLayout';
import Header from '../components/Header';

const Home = props => (
    <MainLayout>
        <Text>{props.sessionID}</Text>
        <Header title="Home">test</Header>
        <Button
            onPress={() => props.navigation.navigate('Login')}
            title="Navigate to Login"
            color="#841584"
        />
        <Button
            onPress={() => props.navigation.navigate('Matches')}
            title="Navigate to Matches"
            color="#841584"
        />
        <Button
            onPress={() => props.navigation.navigate('Standings')}
            title="Navigate to Standings"
            color="#841584"
        />
        <PlusButton navigate={props.navigation.navigate} />
    </MainLayout>
);

const mapStateToProps = state => ({
    token: state.auth.token,
});

const ConnectedContent = connect(
    mapStateToProps,
    {},
)(Home);

export default ConnectedContent;
