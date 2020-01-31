import React, { useEffect, useState} from 'react';
import { View, Text, Image } from 'react-native';
import axiosPure from 'axios';
import axios from '../../../../../utils/axios';
import { styles } from './style';

export const CardEvolution = ({pokemonUrl}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getPokemon = async () => {
            const specie = await axiosPure.get(pokemonUrl);
            const extra = await axios.get(`/pokemon/${specie.data.name}`)
            setPokemon({...extra.data, ...specie.data});
        } 
        getPokemon();
    }, [])

    return(
        <View>
            {
                pokemon &&
                <View style={styles.container}>
                    <Text style={styles.pokemonName}>{pokemon.name}</Text>
                    <Image style={styles.image}
                        source={{uri: pokemon.sprites.front_default}}
                    />
                </View>
            }
        </View>
    )
}