/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PlusButton from '../components/PlusButton';

import MainLayout from '../layouts/MainLayout';

const Standings = props => (
    <MainLayout>
        <View>
            <FlatList
                data={[
                    { key: 'Jeroen: 32 wins' },
                    { key: 'Nick: 30 wins' },
                    { key: 'Luciano: 29 wins' },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </View>
        <PlusButton navigate={props.navigation.navigate} />
    </MainLayout>
);

const mapStateToProps = state => ({
    token: state.auth.token,
});

const ConnectedContent = connect(
    mapStateToProps,
    {},
)(Standings);

export default ConnectedContent;
