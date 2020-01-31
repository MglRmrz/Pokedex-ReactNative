import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'white',
        borderBottomColor: '#cdcdcd',
        borderBottomWidth: 1
    },
    photoContainer: {
        height: 100,
        alignItems: 'center'
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    imagePokemon: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    pokedexPosition: {
        position: 'absolute',
        top: 10,
        paddingLeft: 15,
        fontWeight: 'bold',
        color: '#424242'
    }
});