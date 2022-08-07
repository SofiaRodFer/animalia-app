/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F6E7DF',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    img: {
        width: 72,
        height: 72,
    },
    text: {
        fontSize: 36,
        color: 'rgba(255, 87, 87, 0.65)',
        marginLeft: 10,
        fontFamily: 'Aloja-Light',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});

export default headerStyles;
