import React from 'react';
import { View, ProgressBarAndroid } from 'react-native';
import { styles } from './style';

export const Loading = () => {
    return(
        <View style={styles.container}>
            <ProgressBarAndroid color="red" />
        </View>
    )
}