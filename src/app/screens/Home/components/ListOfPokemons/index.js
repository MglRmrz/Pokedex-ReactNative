import React from 'react';
import { FlatList } from 'react-native';

import { CardList } from '../CardList';

export const ListOfPokemon = ({list = [], onEndReached}) => {

    return(
        <FlatList 
            data={list}
            renderItem={({item}) => <CardList name={item.name} /> }
            keyExtractor={item => item.name}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            initialNumToRender={20}
        />
    )
}   