import React, { useState, useEffect} from 'react';
import { Text, View, ProgressBarAndroid } from 'react-native';
import { styles } from './style';

export const Stat = ({item}) => {
    const [color, setColor] = useState({normal: 'white', rgba: 'rgba(255, 255, 255, 1)'});

    useEffect(() => {
        getColor();
    }, [])

    const placeSpace = (string) => {
        return string.replace('-', ' ');
    }

    const getColor = () => {
        switch(item.stat.name) {
            case 'hp': setColor({normal: 'red', rgba: 'rgba(255, 0, 0, .3)'}); break;
            case 'attack': setColor({normal: 'orange', rgba: 'rgba(255, 165, 0, .3)'}); break;
            case 'defense': setColor({normal: '#CCCC00', rgba: 'rgba(204, 204, 0, .3)'}); break;
            case 'special-attack': setColor({normal: 'blue', rgba: 'rgba(0, 0, 255, .3)'}); break;
            case 'special-defense': setColor({normal: 'green', rgba: 'rgba(0, 255, 0, .3)'}); break;
            case 'speed': setColor({normal: 'violet', rgba: 'rgba(238, 130, 238, .3)'}); break;
        }
    }

    return(
        <View style={{
            backgroundColor: color.rgba,
            padding: 5,
            borderRadius: 5,
            marginVertical: 2
        }}>
            <Text style={styles.textContainer}>
                {placeSpace(item.stat.name)}: <Text style={styles.stat}>{item.base_stat}</Text>
            </Text>
            <ProgressBarAndroid 
                styleAttr="Horizontal"
                progress={item.base_stat / 250}
                indeterminate={false}
                color={color.normal}
                style={{
                    width: '100%'
                }}
            />
        </View>
    )
}