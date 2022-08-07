/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';

import styles from '../../styles/styles';
import PetEdicao from './petEdicao';

export default class ListaEdicao extends Component {
    constructor(props) {
        super(props);
        this.pets = props.pets;
        this.navigation = props.navigation;
    }

    render() {
        return (
            <View style={styles.petContainer}>
                {this.pets.map(pet => (
                    <PetEdicao
                        key={pet.id}
                        id={pet.id}
                        nome={pet.nome}
                        raca={pet.raca}
                        dataNascimento={pet.dataNascimento}
                        dataAdocao={pet.dataAdocao}
                        genero={pet.genero}
                        foto={pet.foto}
                        navigation={this.navigation}
                    />
                ))}
            </View>
        );
    }
}


