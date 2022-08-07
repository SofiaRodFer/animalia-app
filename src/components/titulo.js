/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import tituloStyles from '../styles/tituloStyles';

export default class Titulo extends Component {
    render() {
        return (
            <View style={tituloStyles.rosa}>
                <View style={tituloStyles.container}>
                    <Text style={tituloStyles.titulo}>{this.props.titulo}</Text>
                </View>
            </View>
        );
    }
}
