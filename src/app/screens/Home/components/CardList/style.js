import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#282828',
        textTransform: 'capitalize',
        marginLeft: 5
    },
    image: {
        width: 50, 
        height: 50, 
        resizeMode: 'contain'
    },
    left:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        flexDirection: 'row'
    }
})