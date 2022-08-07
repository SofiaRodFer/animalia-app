/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const petStyles = StyleSheet.create({
    container: {
        marginBottom: 35,
        marginTop: 5,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerFoto: {

    },
    containerTexto: {
        paddingRight: 10,
        height: '85%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
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
        fontFamily: 'Varela-Round',
        color: 'black',
        fontSize: 18,
        flexWrap: 'wrap',
    },
    info: {
        fontFamily: 'Varela-Round',
        color: 'rgba(0, 0, 0, 0.8)',
        fontSize: 14,
    },
    genero: {
        width: 14,
        height: 14,
    },
});

export default petStyles;
