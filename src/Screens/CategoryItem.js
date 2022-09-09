import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Appearance,
} from 'react-native';

export default function CategoryItem({product}) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const navigation = useNavigation();

  const {id, name, category, price, images, colors} = product;
  const {
    primary,
    secondary,
    priceColor,
    cartColor,
    bgColor,
    txtColor,
    darkPrimary,
    darkSecondary,
    darkPriceColor,
    darkCartColor,
    darkBgColor,
    darkTxtColor,
  } = colors;

  const onDetailsPress = () => {
    navigation.navigate('ProductDetails', {product});
  };

  return (
    <View
      style={
        theme == 'light'
          ? {backgroundColor: bgColor}
          : {backgroundColor: darkBgColor}
      }>
      <View
        style={[
          styles.centerContainer,
          theme == 'light'
            ? {backgroundColor: bgColor}
            : {backgroundColor: darkBgColor},
        ]}>
        <View
          style={[
            styles.mainContainer,
            theme == 'light'
              ? {backgroundColor: primary}
              : {backgroundColor: darkPrimary},
          ]}>
          <TouchableOpacity onPress={onDetailsPress}>
            <View
              style={[
                styles.container,
                theme == 'light'
                  ? {backgroundColor: secondary}
                  : {backgroundColor: darkSecondary},
              ]}>
              <View>
                <Image source={images[0]} style={[styles.image]} />
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 36,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={onDetailsPress}>
              <View>
                <Text
                  style={[
                    {fontSize: 14, fontWeight: '500'},
                    theme == 'light' ? {color: txtColor} : {color: '#fff'},
                  ]}>
                  {category}
                </Text>
                <Text
                  style={[
                    {fontSize: 22, fontWeight: '500'},
                    theme == 'light' ? {color: txtColor} : {color: '#fff'},
                  ]}>
                  {name}
                </Text>
                <Text
                  style={[
                    {
                      fontSize: 22,
                      fontWeight: '500',
                      marginTop: 3,
                    },
                    theme == 'light'
                      ? {color: priceColor}
                      : {color: darkPriceColor},
                  ]}>
                  $ {price}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('StoreScreen', {product})}>
              <View
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    marginStart: 80,
                  },
                  theme == 'light'
                    ? {backgroundColor: cartColor}
                    : {backgroundColor: darkCartColor},
                ]}>
                <Image
                  source={require('../../assets/shopping-cart.png')}
                  style={[
                    {
                      width: 34,
                      height: 34,
                    },
                    theme == 'light'
                      ? {tintColor: '#767a7b'}
                      : {tintColor: '#fff'},
                  ]}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  mainContainer: {
    width: '88%',
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  container: {
    width: 200,
    height: 200,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotateZ: '80deg'}],
    marginTop: 14,
  },
  image: {
    width: 1690 / 5,
    height: 1127 / 5,
    transform: [{rotateZ: '-75deg'}],
    marginStart: -50,
  },
});
