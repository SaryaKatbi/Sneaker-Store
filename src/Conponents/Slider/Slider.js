import React, {useState} from 'react';
import {FlatList, Appearance} from 'react-native';
import SizeItem from './SizeItem';

export default function HomeScreen({sizes, selectedSize, handlePress}) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <FlatList
      contentContainerStyle={{paddingStart: 15, paddingEnd: 15}}
      data={sizes}
      renderItem={({item}) => {
        return (
          <SizeItem
            name={item}
            selected={selectedSize === item}
            handlePress={() => handlePress(item)}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={x => x}
    />
  );
}
