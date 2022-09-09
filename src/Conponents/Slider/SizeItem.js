import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Appearance,
} from 'react-native';

export default function SizeItem({name, selected, handlePress}) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const route = useRoute();
  const {product} = route.params;
  const {colors} = product;
  const {priceColor, bgColor, darkPriceColor, darkBgColor} = colors;

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={[
            styles.container,
            selected
              ? theme == 'light'
                ? {backgroundColor: priceColor}
                : {backgroundColor: darkPriceColor}
              : theme == 'light'
              ? {backgroundColor: bgColor}
              : {backgroundColor: darkBgColor},

            theme == 'light'
              ? {borderColor: '#A8AAAC'}
              : {borderColor: '#525354'},
          ]}>
          <Text
            style={[
              styles.size,
              selected ? {color: '#fff'} : {color: '#525354'},
            ]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    marginHorizontal: 6,
    borderRadius: 8,
    borderColor: '#a8aaac',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    fontSize: 20,
    fontWeight: '500',
  },
});
