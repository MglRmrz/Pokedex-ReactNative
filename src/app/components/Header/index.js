import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-view';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';
import IconFa from 'react-native-vector-icons/FontAwesome';
import { ButtonIcon } from '../ButtonIcon';

export const Header = ({children, title, mode = 'back', navigation, search = false, onChangeSearch}) => {
    const [pokemonSearch, setPokemonSearch] = useState('');

    return(
        <SafeAreaView>
            {
                !search ? 
                <LinearGradient style={styles.container} 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}}
                    colors={['red', 'white']}
                >
                    <View style={styles.left}>
                        {
                            mode === 'back' && 
                            <View style={styles.backContainer}>
                                <HeaderBackButton tintColor="white" onPress={() => navigation.goBack()} />
                            </View>
                        }
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.right}>
                        {children}
                    </View>
                </LinearGradient> :
                // INPUT SEARCH
                <View style={styles.searchContainer}>
                    <View style={styles.backContainer}>
                        <HeaderBackButton tintColor="red" onPress={onChangeSearch} />
                    </View>
                    {/* INPUT */}
                    <TextInput style={styles.inputSearch} 
                        placeholder="Search..." 
                        autoFocus
                        onChange={(event) => setPokemonSearch(event.target.value)}
                    />
                    <View style={styles.iconSearchContainer}>
                        <ButtonIcon 
                            icon={<IconFa name="search" color="red" size={20} />}
                        />
                    </View>
                </View>
            }
            
        </SafeAreaView>
    )
}