/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';

import styles from '../../styles/styles';
import Pet from './pet';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.pets = props.pets;
    }

    render() {
        return (
            <View style={styles.petContainer}>
                {this.pets.map(pet => (
                    <Pet
                        key={pet.id}
                        nome={pet.nome}
                        raca={pet.raca}
                        dataNascimento={pet.dataNascimento}
                        dataAdocao={pet.dataAdocao}
                        genero={pet.genero}
                        foto={pet.foto}
                    />
                ))}
            </View>
        );
    }
}


