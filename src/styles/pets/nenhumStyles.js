/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const nenhumStyles = StyleSheet.create({
    scrollView: {
        height: 10,
    },
    container: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontFamily: 'Varela-Round',
        fontSize: 24,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    botao: {
        marginTop: 8,
        width: '60%',
        height: 30,
        backgroundColor: '#F1CAB5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
    },
    textoBotao: {
        fontFamily: 'Varela-Round',
        fontSize: 20,
        color: 'white',
    },
});

export default nenhumStyles;
