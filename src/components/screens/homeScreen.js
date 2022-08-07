/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import PetDatabase from '../../database/petDatabase';

import styles from '../../styles/styles';
import nenhumStyles from '../../styles/pets/nenhumStyles';

import Header from '../header';
import Titulo from '../titulo';
import Footer from '../footer';
import Lista from '../pets/lista';

const HomeScreen = ({ navigation }) => {
    const Listar = async () => {
        let key = Math.random() * 100;
        const banco = new PetDatabase();
        let lista = await banco.Listar();
        setListagem(lista);
        setForceUpdate(key);
    };

    let [listagem, setListagem] = useState(async () => await Listar());
    let [forceUpdate, setForceUpdate] = useState(0);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
          Listar();
        });

      return unsubscribe;
      }, [navigation]);

    return (
        <View style={styles.container}>
            <SafeAreaView styles={styles.SafeAreaView}>
              <View style={styles.container}>
                <Header />
                <Titulo titulo="Seus pets" />
                <ScrollView style={styles.scrollView}>
                    {listagem.length > 0
                        ?
                            <Lista pets={listagem} key={forceUpdate}/>
                        :
                            <View style={nenhumStyles.container}>
                                <Text style={nenhumStyles.texto}>Você atualmente não possui nenhum animal cadastrado!</Text>
                                <TouchableOpacity style={nenhumStyles.botao} onPress={() => {
                                    navigation.navigate('CadastroScreen');
                                    }}>
                                    <Text style={nenhumStyles.textoBotao}>cadastrar</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </ScrollView>
                <Footer />
              </View>
            </SafeAreaView>
        </View>
    );
};

export default HomeScreen;
