import React from 'react';
import { StyleSheet, View } from 'react-native';

const MainLayout = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        paddingRight: 20,
        marginBottom: 100,
        paddingLeft: 20,
        textAlign: 'center',
        width: '100%',
        height: '100%',
    },
});

export default MainLayout;
