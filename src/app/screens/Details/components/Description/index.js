import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style';
import { PhotoSprite } from '../PhotoSprite';
import { CardEvolution } from '../CardEvolution';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import { Stat } from '../Stat';

export const Description = ({pokemon}) => {

    /**
     * @description Busca en el array la descripción del pokemon en inglés
     */
    const getDescription = (descriptionsArray) => {
        return descriptionsArray.find(description => {
            if (description.language.name === 'en') {
                return true;
            }
        })
    }

    /**
     * @description Remueve los saltos de linea en el estring
     */
    const replaceString = (string) => {
        return string.replace(/(\r\n|\n|\r)/gm, " ");
    }

    /**
     * @description Coloca el punto decimal que falta en la petición
     */
    const placePoint = (number) => {
        const numbreString = String(number);
        return numbreString.substr(0, numbreString.length - 1) + '.' + numbreString.substr(numbreString.length - 1, numbreString.length - 1);
    }

    return(
        <View style={styles.container}>
            {/* DESCRIPTON */}
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>
                {replaceString(getDescription(pokemon.genera).genus)}.
            </Text>
            <Text style={styles.description}>
                {replaceString(getDescription(pokemon.flavor_text_entries).flavor_text)}
            </Text>
            {/* DIMENSIONS */}
            <View style={styles.dimensionsContainer}>
                <Text style={styles.dimensionText}>
                    Weight: <Text style={styles.dimensionSpan}>{placePoint(pokemon.weight)} Kg</Text>
                </Text>
                <Text style={styles.dimensionText}>
                    Height: <Text style={styles.dimensionSpan}>{(pokemon.height / 10)} m</Text>
                </Text>
            </View>
            {/* SPRITES */}
            <Text style={styles.titleSprites}>Sprites</Text>
            <View style={styles.spritesContainer}>
                <PhotoSprite image={pokemon.sprites.front_default} gender="Male" />
                <PhotoSprite image={pokemon.sprites.back_default} />
                {
                    pokemon.sprites.front_female && 
                    <PhotoSprite image={pokemon.sprites.front_female} gender="Female" />
                }
                {
                    pokemon.sprites.back_female && 
                    <PhotoSprite image={pokemon.sprites.back_female} />
                }
                {
                    !pokemon.sprites.back_female && pokemon.sprites.front_female &&
                    <PhotoSprite image={pokemon.sprites.back_default} />
                }
                {
                    pokemon.sprites.front_shiny && 
                    <PhotoSprite image={pokemon.sprites.front_shiny} gender="Male Shiny" />
                }
                {
                    pokemon.sprites.back_shiny && 
                    <PhotoSprite image={pokemon.sprites.back_shiny} />
                }
                {
                    pokemon.sprites.front_shiny_female && 
                    <PhotoSprite image={pokemon.sprites.front_shiny_female} gender="Female Shiny" />
                }
                {
                    pokemon.sprites.back_shiny_female && 
                    <PhotoSprite image={pokemon.sprites.back_shiny_female} />
                }
                {
                    !pokemon.sprites.back_shiny_female && pokemon.sprites.front_shiny_female &&
                    <PhotoSprite image={pokemon.sprites.back_shiny_male} />
                }
            </View>
            {/* EVOLUTION LINE */}
            <Text style={styles.title}>Evolution line</Text>
            <View style={styles.evolutionsContainer}>
                <View style={styles.evolutionsContainer}>
                    <CardEvolution pokemonUrl={pokemon.chain.species.url} />
                </View>
                {
                    pokemon.chain.evolves_to.length > 0 &&
                    <View style={styles.evolutionsContainer}>
                        <IconFa5 name="long-arrow-alt-right" size={30} color="gray" />
                        <CardEvolution pokemonUrl={pokemon.chain.evolves_to[0].species.url} />
                    </View>
                }
                {
                    pokemon.chain.evolves_to.length > 0 && pokemon.chain.evolves_to[0].evolves_to.length > 0 && 
                    <View style={styles.evolutionsContainer}>
                        <IconFa5 name="long-arrow-alt-right" size={30} color="gray" />
                        <CardEvolution pokemonUrl={pokemon.chain.evolves_to[0].evolves_to[0].species.url} />
                    </View>
                }
            </View>
            {/* STATS */}
            <Text style={styles.title}>Base stats</Text>
            <View style={styles.statsList}>
                <FlatList 
                    data={pokemon.stats}
                    keyExtractor={({index}) => index}
                    renderItem={({item}) => <Stat item={item} />}
                />
            </View>
        </View>
    )
}