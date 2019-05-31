import React from 'react';
import { Text } from 'react-native';

// export class MonoText extends React.Component {
//     render() {
//         return <Text {...this.props} />;
//     }
// }

export const MonoText: React.FC<MonoText> = props => (
    <Text {...props}>{props.children}</Text>
);

type MonoText = { children: string; style?: any; };
