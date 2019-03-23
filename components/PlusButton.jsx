/* eslint-disable global-require */
import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        alignItems: 'center',
        paddingTop: 15,
        width: 60,
        height: 60,
        bottom: 0,
        right: 50,
        borderRadius: 30,
        backgroundColor: '#23be87',
    },
});

const PlusButton = props => (
    <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => props.navigate('AddGame')}
    >
        <Image source={require('../assets/plus.png')} />
    </TouchableOpacity>
);

export default PlusButton;
