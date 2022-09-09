import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Appearance} from 'react-native';

export default function Header() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const navigation = useNavigation();

  return (
    <View
      style={
        theme == 'light'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#000508'}
      }>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
            marginStart: 6,
            marginEnd: 6,
          },
          theme == 'light'
            ? {backgroundColor: '#fff'}
            : {backgroundColor: '#000508'},
        ]}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require('../../assets/menu.png')}
            style={[
              {width: 28, height: 28, marginTop: 5},
              theme == 'light' ? {tintColor: '#0c2325'} : {tintColor: '#fff'},
            ]}
          />
        </TouchableOpacity>
        <Text
          style={[
            {fontSize: 20, marginTop: 5},
            theme === 'light' ? {color: '#0c2325'} : {color: '#fff'},
          ]}>
          New Arrival
        </Text>
        <View></View>
      </View>
    </View>
  );
}
