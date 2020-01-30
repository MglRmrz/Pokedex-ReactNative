import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        paddingRight: 10,
        flexDirection: 'row',
        height: 60
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    backContainer: {
        position: 'relative',
        marginVertical: -5
    },
    title: {
        fontSize: 20,
        fontWeight: '900',
        color: 'white',
        marginLeft: 10
    },
    searchContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputSearch: {
        height: 60,
        flex: 1
    },
    iconSearchContainer: {
        marginRight: 15
    }
});