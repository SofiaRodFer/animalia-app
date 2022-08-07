/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const formStyles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 17,
        width: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        marginTop: 15,
        backgroundColor: '#F6E7DF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        fontFamily: 'Varela-Round',
        fontSize: 15,
        paddingLeft: 20,
    },
    botaoContainer: {},
    botao: {
        backgroundColor: '#F1CAB5',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 60,
        paddingRight: 60,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    textoBotao: {
        fontFamily: 'Varela-Round',
        color: 'white',
        fontSize: 20,
    },
    fotoText: {
        fontSize: 15.5,
        color: '#988f8a',
        // opacity: 0.9,
        fontFamily: 'Varela-Round',
        paddingLeft: 1,
    },
    inputFoto: {
        justifyContent: 'center',
    },
});

export default formStyles;
