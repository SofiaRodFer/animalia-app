/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import PetDatabase from '../../database/petDatabase';

import styles from '../../styles/styles';
import nenhumStyles from '../../styles/pets/nenhumStyles';

import Header from '../header';
import Titulo from '../titulo';
import Footer from '../footer';
import Pet from '../pets/pet';

const HomeScreen = ({ navigation }) => {
    const gerarLista = () => {
        let listaFuncao = [];
        const banco = new PetDatabase();
        banco.Listar().then(listaCompleta => {
          listaFuncao = listaCompleta;
        });

        console.log('lista vindo da funcao ', lista, ' lista vindo da funcao')
        return listaFuncao;
    };

    let [lista, setLista] = useState(() => gerarLista());

    // let lista = gerarLista();

    const existemPets = () => {
        setLista(() => gerarLista());
        // console.log('------------------', gerarLista(), '-------------------------');
        // setLista();
        // console.log('lista------------------', lista, '-------------------------lista');
    };


    return (
        <View style={styles.container}>
            <SafeAreaView styles={styles.SafeAreaView}>
              <View style={styles.container}>
                <Header />
                <Titulo titulo="Seus pets" />
                <ScrollView style={styles.scrollView}>
                        {useEffect(() => {
                            setLista(() => gerarLista());

                            lista.length > 0
                            ?
                                <View style={styles.petContainer}>
                                    {lista.map(pet => (
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
                            :
                                <View style={nenhumStyles.container}>
                                    <Text style={nenhumStyles.texto}>Você atualmente não possui nenhum animal cadastrado!</Text>
                                    <TouchableOpacity style={nenhumStyles.botao} onPress={() => navigation.navigate('CadastroScreen')}>
                                        <Text style={nenhumStyles.textoBotao}>cadastrar</Text>
                                    </TouchableOpacity>
                                </View>;
                        console.log('-------------------------', lista, '-------------------------')}, [lista, navigation])
                        }
                </ScrollView>
                <Footer />
              </View>
            </SafeAreaView>
        </View>
    );
};

// export default HomeScreen;
