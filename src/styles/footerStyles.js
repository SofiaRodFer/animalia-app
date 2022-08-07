/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
        flexDirection: 'row',
        paddingBottom: 5,
        borderTopColor: 'rgba(0, 0, 0, 0.15)',
        paddingTop: 5,
        borderTopWidth: 0.7,
    },
    img: {
        width: 38,
        height: 38,
        opacity: 0.8,
    },
    add: {
        width: 48,
        height: 48,
    },
});

export default footerStyles;
