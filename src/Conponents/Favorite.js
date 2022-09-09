import React, {useState} from 'react';
import {TouchableOpacity, Appearance} from 'react-native';

import {View, Image} from 'react-native';

const FavoriteButton = ({favColor}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFunction = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleFunction}>
        {isFavorite ? (
          <Image
            source={require('../../assets/favorite.png')}
            style={[
              {width: 30, height: 30},
              theme == 'light' ? {tintColor: '#000'} : {tintColor: '#fff'},
            ]}
          />
        ) : (
          <Image
            source={require('../../assets/favorite-red.png')}
            style={{width: 30, height: 30, tintColor: favColor}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteButton;
