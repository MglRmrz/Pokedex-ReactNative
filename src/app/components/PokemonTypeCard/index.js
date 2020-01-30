import React from 'react';
import { View, Text } from 'react-native';

export const PokemonTypeCard = ({type}) => {

    const getBackgroundColor = () => {
        switch(type.name) {
            case 'poison': return '#9E569F';
            case 'grass': return '#7ABF36';
            case 'fire': return '#E83C0C';
            case 'flying': return '#6C7ECC';
            case 'water': return '#2C89E6';
            case 'bug': return '#9CAB18';
            case 'dark': return '#423126';
            case 'dragon': return '#5444A1';
            case 'electric': return '#F6B213';
            case 'fairy': return '#F4B0F4';
            case 'fighting': return '#79301A';
            case 'ghost': return '#6161B3';
            case 'ground': return '#D0AF54';
            case 'ice': return '#72D5F6';
            case 'normal': return '#C1BCB2';
            case 'psychic': return '#ED4983';
            case 'rock': return '#B59D52';
            case 'steel': return '#9494A0';
            default: return 'gray';
        }
    }

    return(
        <View style={{
            backgroundColor: getBackgroundColor(),
            paddingVertical: 5,
            paddingHorizontal: 10,
            height: 30,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            borderWidth: 2,
            borderColor: 'white',
            marginHorizontal: 2,
            marginVertical: 2
        }}>
            <Text style={{
                textTransform: 'uppercase',
                color: 'white',
                fontSize: 10,
                fontWeight: 'bold'
            }}>
                {type.name}
            </Text>
        </View>
    )
}