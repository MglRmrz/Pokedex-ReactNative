import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

export const PhotoSprite = ({image, gender = ''}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.gender}>{gender}</Text>
            <Image style={styles.image}
                source={{uri: image}}
            />
        </View>
    )
}