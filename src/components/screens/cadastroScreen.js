/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import styles from '../../styles/styles';
import Header from '../header';
import Titulo from '../titulo';
import Footer from '../footer';
import Form from '../pets/form';

const CadastroScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView styles={styles.SafeAreaView}>
              <View style={styles.container}>
                <Header />
                <Titulo titulo="Cadastrar pets" />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.petContainer}>
                      <Form textoBotao="cadastrar" funcao="cadastrar" />
                    </View>
                </ScrollView>
                <Footer />
              </View>
            </SafeAreaView>
        </View>
    );
};

export default CadastroScreen;
