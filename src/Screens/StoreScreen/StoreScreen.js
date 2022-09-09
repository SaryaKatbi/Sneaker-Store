import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ATMCart from './ATMCart';
import AutoPlaySwioper from './AutoPlaySwiper';

export default function StoreScreen() {
  const route = useRoute();
  const {product} = route.params;
  const {id, name, category, price, images, colors, sizes} = product;
  const {
    primary,
    secondary,
    priceColor,
    bgColor,
    darkPrimary,
    darkSecondary,
    darkPriceColor,
    buyColor,
    darkBuyColor,
  } = colors;

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View
      style={[
        styles.container,
        theme == 'light'
          ? {backgroundColor: bgColor}
          : {backgroundColor: '#000508'},
      ]}>
      <ATMCart />
      <View
        style={[
          {
            alignItems: 'center',
            flex: 1,
            marginTop: -72,
            justifyContent: 'center',
          },
          theme == 'light'
            ? {backgroundColor: bgColor}
            : {backgroundColor: '#000508'},
        ]}>
        <View
          style={[
            {
              width: '90%',
              height: 230,
              borderRadius: 34,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            },
            theme == 'light'
              ? {backgroundColor: primary}
              : {backgroundColor: darkPrimary},
          ]}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,
                marginTop: 2,
              }}>
              <View
                style={[
                  {
                    width: 95,
                    height: 95,
                    backgroundColor: secondary,
                    borderRadius: 16,
                    transform: [{rotateZ: '80deg'}],
                  },
                  theme == 'light'
                    ? {backgroundColor: secondary}
                    : {backgroundColor: darkSecondary},
                ]}
              />
              <View style={{position: 'absolute'}}>
                <AutoPlaySwioper images={images} />
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  {fontSize: 16, fontWeight: '400'},
                  theme == 'light' ? {color: 'black'} : {color: 'white'},
                ]}>
                {name}
              </Text>
              <Text
                style={[
                  {fontSize: 22, fontWeight: '450', color: 'black'},
                  theme == 'light' ? {color: 'black'} : {color: 'white'},
                ]}>
                {category}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 24,
                    fontWeight: '600',
                    marginTop: 4,
                  },
                  theme == 'light'
                    ? {color: priceColor}
                    : {color: darkPriceColor},
                ]}>
                ${price}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={
          theme == 'light'
            ? ['#EBF3F5', '#F5F5EB', '#F5EBED']
            : ['#1A1616', '#1A1A16', '#16191A']
        }
        useAngle={true}
        angle={90}
        angleCenter={{x: 0.5, y: 0.5}}
        style={styles.gradientContainer}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 18,
            }}>
            <View style={{marginStart: 76}}>
              <Text
                style={[
                  {fontSize: 24, fontWeight: '600'},
                  theme == 'light' ? {color: buyColor} : {color: darkBuyColor},
                ]}>
                Total
              </Text>
            </View>
            <View style={{marginEnd: 76}}>
              <Text
                style={[
                  {fontSize: 24, fontWeight: '600'},
                  theme == 'light' ? {color: buyColor} : {color: darkBuyColor},
                ]}>
                ${price}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              {
                borderRadius: 20,
                width: 300,
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
              },
              theme == 'light'
                ? {backgroundColor: 'white'}
                : {backgroundColor: 'black'},
            ]}>
            <Text
              style={[
                {fontSize: 24, fontWeight: '600'},
                theme == 'light' ? {color: buyColor} : {color: darkBuyColor},
              ]}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradientContainer: {
    width: '100%',
    height: 156,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 4,
  },
});
