import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    collapseHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#cdcdcd',
        paddingHorizontal: 10
    },
    collapseTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray'
    }
})