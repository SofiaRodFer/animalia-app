/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const petEdicaoStyles = StyleSheet.create({
    container: {
        marginBottom: 35,
        marginTop: 5,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerFoto: {},
    containerTexto: {
        paddingRight: 10,
        height: '85%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        elevation: 10,
        borderTopRightRadius: 23,
        borderBottomRightRadius: 23,
    },
    img: {
        width: 120,
        height: 120,
        borderBottomLeftRadius: 23,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 13,
    },
    containerInfo: {
        marginLeft: 15,
        marginBottom: 10,
        width: 145,
    },
    nome: {
        fontSize: 20,
        color: 'black',
    },
    botoes: {
        // height: 100,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    botao: {
        width: 30,
        height: 30,
        opacity: 0.8,
    },
    genero: {
        width: 17,
        height: 17,
    },
});

export default petEdicaoStyles;
