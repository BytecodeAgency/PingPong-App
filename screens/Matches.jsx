/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PlusButton from '../components/PlusButton';

import MainLayout from '../layouts/MainLayout';

const Matches = props => (
    <MainLayout>
        <View>
            <FlatList
                data={[
                    { key: 'Nick - Jeroen: 5 - 11' },
                    { key: 'Luciano - Jeroen: 5 - 11' },
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
)(Matches);

export default ConnectedContent;
