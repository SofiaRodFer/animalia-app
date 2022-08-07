/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { View, Text, Image } from 'react-native';

import petStyles from '../../styles/pets/petStyles';

export default class Pet extends Component {
    // calcularTempo(data) {
    //     const date = new Date();
    //     const dataAtual = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
    //     const arrayData = data.split('/');

    //     if (dataAtual[2] - arrayData[2] === 0 && arrayData[1] - dataAtual[1] < 12) {
    //         const meses = arrayData[1] - dataAtual[1];
    //         return [meses, meses === 1 ? 'mês' : 'meses'];
    //     } else if (dataAtual[2] - arrayData[2] === 1 && arrayData[1] < dataAtual[1]) {
    //         const meses = arrayData[1] - dataAtual[1];
    //         return [meses, meses === 1 ? 'mês' : 'meses'];
    //     } else if (dataAtual[2] - arrayData[2] === 0 && arrayData[1] - dataAtual[1] === 0 && arrayData[0] - dataAtual[0] < 31) {
    //         const dias = arrayData[0] - dataAtual[0];
    //         return [dias, dias === 1 ? 'dia' : 'dias'];
    //     } else if ((dataAtual[2] - arrayData[2] === 0 && arrayData[1] - dataAtual[1] === 1 && arrayData[0] < dataAtual[0])) {
    //         const dias = arrayData[0] - dataAtual[0];
    //         return [dias, dias === 1 ? 'dia' : 'dias'];
    //     }
    // }

    pegarAnos(data) {
        const arrayData = data.split('/');
        const anoAtual = new Date().getFullYear();
        // eslint-disable-next-line radix
        const idade = anoAtual - parseInt(arrayData[2]);

        return idade;
    }

    verificarAno(data) {
        const ano = this.pegarAnos(data);

        if (ano !== 1) {
            return 's';
        } else {
            return '';
        }
    }

    verificarGenero(genero) {
        if (genero.toLowerCase() === 'feminino') {
            return 'a';
        }
        return 'o';
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

    render() {
        return (
            <View style={petStyles.container}>
                <View style={petStyles.containerFoto}>
                    <Image
                        source={this.props.foto === 'padrao.png' ? require('../../../assets/padrao.png') : {uri: this.props.foto}}
                        // source={require('../../../assets/kelly.jpeg')}
                        style={petStyles.img}
                    />
                </View>
                <View style={petStyles.containerTexto}>
                    <View style={petStyles.containerInfo}>
                        <Text style={petStyles.nome} numberOfLines={1}>
                            {this.props.nome}
                        </Text>
                        <Text style={petStyles.info}>
                            {this.props.raca} <Image source={this.imagemGenero(this.props.genero)} style={petStyles.genero} />
                        </Text>
                        <Text style={petStyles.info}>
                            {this.pegarAnos(this.props.dataNascimento)} ano{this.verificarAno(this.props.dataNascimento)}
                        </Text>
                        <Text style={petStyles.info}>
                            Adotad{this.verificarGenero(this.props.genero)} há {this.pegarAnos(this.props.dataAdocao)} ano{this.verificarAno(this.props.dataNascimento)}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
