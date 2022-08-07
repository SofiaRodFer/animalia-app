/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import nenhumStyles from '../../styles/pets/nenhumStyles';

export default class Nenhum extends Component {
    render() {
        return (
            <View style={nenhumStyles.container}>
                <Text style={nenhumStyles.texto}>Você atualmente não possui nenhum animal cadastrado!</Text>
                <TouchableOpacity style={nenhumStyles.botao} onPress={() => this.navigation.navigate('CadastroScreen')}>
                    <Text style={nenhumStyles.textoBotao}>cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
