import React, { useEffect, useState } from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import { styles } from './style';
import axios from '../../../../../utils/axios';
import { PokemonTypeCard } from '../../../../components/PokemonTypeCard';

export const CardList = ({name, navigation}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getPokemon = async () => {
            const {data} = await axios.get(`/pokemon/${name}`);
            // console.log(data);
            setPokemon(data);
            // console.log(pokemon);
        }
        getPokemon();
    }, [])

    return(
        <TouchableNativeFeedback 
            background={TouchableNativeFeedback.Ripple('black')}
            onPress={() => navigation.navigate('Details', name)}
        >
            <View style={styles.container}>
                <View style={styles.left}>
                    {
                        pokemon && <Image source={{uri: pokemon.sprites.front_default}} style={styles.image} />
                    }
                    <Text style={styles.name}>{name}</Text>
                </View>
                {
                    pokemon && 
                    <View style={styles.right}>
                        {
                            pokemon.types.map(({type}) => (
                                <PokemonTypeCard type={type} />
                            ))
                        }
                    </View>
                }
                
            </View>
        </TouchableNativeFeedback>
    )
}