import React from 'react';
import { View, Text } from 'react-native';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { ButtonIcon } from '../../../../components/ButtonIcon';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { PopupCollapse } from '../PopupCollapse';
import { PokemonTypeCard } from '../../../../components/PokemonTypeCard';

export const PopupFilter = ({opened = false, setShow, onSelect}) => {

    const types = [
        {name: 'bug'},
        {name: 'dark'},
        {name: 'dragon'},
        {name: 'electric'},
        {name: 'fairy'},
        {name: 'fighting'},
        {name: 'fire'},
        {name: 'flying'},
        {name: 'ghost'},
        {name: 'grass'},
        {name: 'ground'},
        {name: 'ice'},
        {name: 'normal'},
        {name: 'poison'},
        {name: 'psychic'},
        {name: 'rock'},
        {name: 'steel'},
        {name: 'water'},
    ]

    const generations = [
        {name: 'I', value: 1},
        {name: 'II', value: 2},
        {name: 'III', value: 3},
        {name: 'IV', value: 4},
        {name: 'V', value: 5},
        {name: 'VI', value: 6},
        {name: 'VII', value: 7}
    ]

    return(
        <Menu opened={opened} onBackdropPress={setShow} onSelect={onSelect}>
            <MenuTrigger 
                children={
                    <ButtonIcon 
                        icon={<IconMa name="sort" color="#282828" size={25} />}
                        onPress={setShow}
                    /> 
                }
            />
            <MenuOptions>
                <View style={styles.conatainer}>
                    <Text style={styles.titlePopup}>Filter by:</Text>
                    <PopupCollapse title="Type">
                        <View style={styles.collapseBody}>
                            {
                                types.map(type => (
                                    <MenuOption value={{value: type.name, select: 't'}} key={type.name}>
                                        <PokemonTypeCard type={type} />
                                    </MenuOption>
                                ))
                            }
                        </View>
                    </PopupCollapse>
                    <PopupCollapse title="Generation">
                        <View style={styles.collapseBody}>
                            {
                                generations.map(generation => (
                                    <MenuOption value={{value: generation.value, select: 'g'}} key={generation.value}>
                                        <PokemonTypeCard type={generation} />
                                    </MenuOption>
                                ))
                            }
                        </View>
                    </PopupCollapse>
                    <MenuOption value={{select: 'all'}}>
                            <Text style={styles.optionAll}>All</Text>
                    </MenuOption>
                </View>
            </MenuOptions>
        </Menu> 
    )
}