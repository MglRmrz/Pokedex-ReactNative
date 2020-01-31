import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

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
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>
                {replaceString(getDescription(pokemon.flavor_text_entries).flavor_text)}
            </Text>
            <View style={styles.dimensionsContainer}>
                <Text style={styles.dimensionText}>
                    Weight: <Text style={styles.dimensionSpan}>{placePoint(pokemon.weight)} Kg</Text>
                </Text>
                <Text style={styles.dimensionText}>
                    Height: <Text style={styles.dimensionSpan}>{(pokemon.height / 10)} m</Text>
                </Text>
            </View>
        </View>
    )
}