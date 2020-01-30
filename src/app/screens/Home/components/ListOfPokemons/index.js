import React from 'react';
import { FlatList } from 'react-native';

import { CardList } from '../CardList';

export const ListOfPokemon = ({list = [], onEndReached, navigation}) => {

    return(
        <FlatList 
            data={list}
            renderItem={({item}) => <CardList name={item.name} navigation={navigation} /> }
            keyExtractor={item => item.name}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            initialNumToRender={20}
        />
    )
}   