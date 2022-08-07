/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View, Image, Text } from 'react-native';

import headerStyles from '../styles/headerStyles';

export default class Header extends Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={headerStyles.img}
                />
                <Text style={headerStyles.text}>Animalia</Text>
            </View>
        );
    }
}
