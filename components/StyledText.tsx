import React from 'react';
import { Text } from 'react-native';

export const MonoText: React.FC<MonoText> = props => (
    <Text {...props}>{props.children}</Text>
);

type MonoText = { children: string; style?: any; };
