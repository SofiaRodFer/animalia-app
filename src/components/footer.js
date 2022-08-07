/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import footerStyles from '../styles/footerStyles';

const Footer = () => {
    const navigation = useNavigation();

    return (
        <View style={footerStyles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', {'atualizar': true})}>
                <Image
                    source={require('../../assets/osso.png')}
                    style={footerStyles.img}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
                <Image
                    source={require('../../assets/add.png')}
                    style={footerStyles.add}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('EdicaoScreen')}>
                <Image
                    source={require('../../assets/lapis.png')}
                    style={footerStyles.img}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
