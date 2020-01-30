import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { styles } from './style';

export const ButtonIcon = ({onPress, icon}) => {

    return(
        <TouchableNativeFeedback 
            background={TouchableNativeFeedback.Ripple('black')} 
            hitSlop={{
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            }}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                {icon}
            </View>
        </TouchableNativeFeedback>
    )
}