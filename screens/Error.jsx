/* eslint-disable react/destructuring-assignment, prettier/prettier */

import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import { clearErrors as _clearErrors } from '../store/actions/errors';

const displayErrors = errorsArr => {
    if (errorsArr) {
        return (
            errorsArr.map((error, i) => (
                <Text key={i.toString()}>
                    Error: {error}
                </Text>
            ))
        );
    }
    return <Text>No errors</Text>;
};

const Errors = props => (
    <MainLayout>
        <Text>Error screen</Text>
        { displayErrors(props.errors) }
        <Button
            onPress={() => props.navigation.navigate('Home')}
            title="Back to home"
            color="#ff0000"
        />
        <Button
            onPress={() => clearErrorsAndGoHome(props)}
            title="Go back and try again"
            color="#ff0000"
        />
    </MainLayout>
);

const clearErrorsAndGoHome = props => {
    props.clearErrors();
    props.navigation.replace('Home');
};

const mapStateToProps = state => ({
    errors: state.errors.errors,
});

const ConnectedErrors = connect(
    mapStateToProps,
    { clearErrors: _clearErrors },
)(Errors);

export default ConnectedErrors;
