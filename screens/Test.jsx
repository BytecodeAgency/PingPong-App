/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import { makeAuthRequest as _makeAuthRequest } from '../store/actions/auth';

const Test = props => (
    <MainLayout>
        <Text>Test route, state: {props.sessionID}</Text>
        <Button
            onPress={() => props.navigation.navigate('Home')}
            title="Back to home"
            color="#ff0000"
        />
        <Button
            onPress={() => props.makeAuthRequest(1234567890)}
            title="Test auth request"
            color="#ff0000"
        />
    </MainLayout>
);

const mapStateToProps = state => ({
    sessionID: state.auth.sessionID,
});

const ConnectedTest = connect(
    mapStateToProps,
    { makeAuthRequest: _makeAuthRequest },
)(Test);

export default ConnectedTest;
