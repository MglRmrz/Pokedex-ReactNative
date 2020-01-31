import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './style';

import { PokemonTypeCard } from '../../../../components/PokemonTypeCard';

export const CardPhoto = ({pokemon}) => {
    return(
        <View style={styles.container}>
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