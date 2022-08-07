/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PetDatabase from '../../database/petDatabase';

import petEdicaoStyles from '../../styles/pets/petEdicaoStyles';

export default class PetEdicao extends Component {
    constructor(props) {
        super(props);
        this.state = {
           foiDeletado: false,
        };
        this.navigation = props.navigation;
        this.pet = {
            id: this.props.id,
            nome: this.props.nome,
            raca: this.props.raca,
            genero: this.props.genero,
            dataNascimento: this.props.dataNascimento,
            dataAdocao: this.props.dataAdocao,
            foto: this.props.foto,
        };
    }

    imagemGenero(genero) {
        const male = require('../../../assets/male.png');
        const female = require('../../../assets/female.png');

        if (genero.toLowerCase() === 'feminino') {
            return female;
        } else {
            return male;
        }
    }

    Remover(id) {
        this.setState({foiDeletado: true});
        const banco = new PetDatabase();
        banco.Remover(id);
    }

    tirarVisibilidade() {
        if (this.state.foiDeletado) {
            return {visibility: 'hidden', opacity: 0, position: 'absolute', zIndex: 0};
        }
    }

    render() {
        return (
            <View style={[petEdicaoStyles.container, this.tirarVisibilidade()]}>
                <View style={petEdicaoStyles.containerFoto}>
                    <Image
                        source={this.props.foto === 'padrao.png' ? require('../../../assets/padrao.png') : {uri: this.props.foto}}
                        style={petEdicaoStyles.img}
                    />
                </View>
                <View style={petEdicaoStyles.containerTexto}>
                    <View style={petEdicaoStyles.containerInfo}>
                        <Text style={petEdicaoStyles.nome} numberOfLines={1}>
                            {this.props.nome} <Image source={this.imagemGenero(this.props.genero)} style={petEdicaoStyles.genero} />
                        </Text>
                        <View style={petEdicaoStyles.botoes}>
                            <TouchableOpacity onPress={() => this.Remover(this.props.id)}>
                                <Image source={require('../../../assets/trash.png')} style={petEdicaoStyles.botao} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.navigation.navigate('EdicaoPetScreen', {pet: this.pet});
                            }}>
                                <Image source={require('../../../assets/lapis.png')} style={petEdicaoStyles.botao} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
