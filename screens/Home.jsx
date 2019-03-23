/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';

const Content = props => (
    <MainLayout>
        <Text>{props.sessionID}</Text>
        <Button
            onPress={() => props.navigation.navigate('Login')}
            title="Navigate to Login"
            color="#841584"
        />
    </MainLayout>
);

const mapStateToProps = state => ({
    token: state.auth.token,
});

const ConnectedContent = connect(
    mapStateToProps,
    {},
)(Content);

export default ConnectedContent;
