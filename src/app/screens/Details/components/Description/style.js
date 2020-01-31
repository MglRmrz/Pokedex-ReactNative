import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#cdcdcd',
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd',
        backgroundColor: 'white',
        height: 'auto',
        marginTop: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },
    description: {
        marginTop: 5,
        color: '#424242'
    },
    dimensionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    dimensionText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    dimensionSpan: {
        fontWeight: 'normal'
    }
})