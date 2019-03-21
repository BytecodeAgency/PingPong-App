/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MainLayout from '../layouts/MainLayout';

const Content = props => (
    <MainLayout>
        <Text>{props.sessionID}</Text>
        <Button
            onPress={() => props.navigation.navigate('Test')}
            title="Navigate to Test"
            color="#841584"
        />
        <Button
            onPress={() => props.navigation.navigate('Error')}
            title="Navigate to Errors"
            color="#841584"
        />
    </MainLayout>
);

Content.propTypes = {
    token: PropTypes.number,
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

const ConnectedContent = connect(
    mapStateToProps,
    {},
)(Content);

export default ConnectedContent;
