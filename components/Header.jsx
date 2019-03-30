/* eslint-disable global-require */
import React from 'react';

const Header = ({ title }) => (
    <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: title, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
);

export default Header;
