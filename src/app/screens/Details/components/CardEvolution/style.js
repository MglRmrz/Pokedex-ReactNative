import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        margin: 0
    },
    pokemonName: {
        textTransform: 'capitalize',
        color: '#424242'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        maxWidth: 70,
        maxHeight: 70
    }
});