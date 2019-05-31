import React from 'react';
// @ts-ignore
import { Icon } from 'expo';

import Colors from '../constants/Colors';

const TabBarIcon: React.FC<TabBarIcon> = ({ name, focused }) => {
    const color = focused ? Colors.tabIconSelected : Colors.tabIconDefault;

    return (
        <Icon.Ionicons
            name={name}
            size={26}
            style={{ marginBottom: -3 }}
            color={color}
        />
    );
};

export default TabBarIcon;

interface TabBarIcon {
    name: string;
    focused: boolean;
}
