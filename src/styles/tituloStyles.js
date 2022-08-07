/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const tituloStyles = StyleSheet.create({
    rosa: {
        backgroundColor: '#F6E7DF',
    },
    container: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        boxShadowColor: 'rgba(0, 0, 0, 0.4)',
        boxShadowOffset: {width: 2, height: 2},
        boxShadowRadius: 2,
    },
    titulo: {
        fontFamily: 'Varela-Round',
        fontSize: 25,
        color: 'black',
        paddingTop: 15,
    },
});

export default tituloStyles;
