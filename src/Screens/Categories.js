import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryItem from './CategoryItem';

export default function Categories({products, setTerm, term}) {
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 25}}
      data={products}
      renderItem={({item}) => {
        return (
          <CategoryItem
            product={item}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        );
      }}
      vertical
      showsVerticalScrollIndicator={false}
      keyExtractor={x => x.id}
    />
  );
}
