import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './style';

import { PokemonTypeCard } from '../../../../components/PokemonTypeCard';

export const CardPhoto = ({pokemon}) => {

    const numberPokedex = (pokedexNumbers) => {
        return pokedexNumbers.find(({pokedex}) => {
            if (pokedex.name === 'national') {
                return true;
            }
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.pokedexPosition}>Pokedex N°{pokemon.pokedex_numbers.length ? numberPokedex(pokemon.pokedex_numbers).entry_number : pokemon.id}</Text>
            <View style={styles.photoContainer}>
                <Image style={styles.imagePokemon}
                    source={{
                        uri: pokemon.sprites.front_default
                    }}
                />
            </View>
            <View style={styles.typeContainer}>
                {
                    pokemon.types.map(({type}) => (
                        <PokemonTypeCard key={type.name} type={type} />
                    ))
                }
            </View>
        </View>
    );
}