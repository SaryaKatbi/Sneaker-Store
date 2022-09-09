import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Appearance,
} from 'react-native';
import Slider from '../../Conponents/Slider/Slider';
import Swiper from './Swiper';

export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState();

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const route = useRoute();
  const {product} = route.params;
  const {id, name, category, price, images, colors, sizes} = product;
  const {
    primary,
    secondary,
    priceColor,
    bgColor,
    txtColor,
    darkPrimary,
    darkSecondary,
    darkPriceColor,
    darkBgColor,
  } = colors;

  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          {flex: 1, backgroundColor: bgColor},
          theme == 'light'
            ? {backgroundColor: bgColor}
            : {backgroundColor: darkBgColor},
        ]}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 25,
          }}>
          <View
            style={[
              {
                width: '100%',
                height: 400,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomEndRadius: 35,
                borderBottomStartRadius: 35,
                marginTop: -25,
              },
              theme == 'light'
                ? {backgroundColor: primary}
                : {backgroundColor: darkPrimary},
            ]}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={[
                  {
                    width: 250,
                    height: 250,
                    borderRadius: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{rotateZ: '80deg'}],
                    marginTop: 24,
                  },
                  theme == 'light'
                    ? {backgroundColor: secondary}
                    : {backgroundColor: darkSecondary},
                ]}
              />
            </View>
          </View>
        </View>
        <View style={{position: 'absolute'}}>
          <Swiper images={images} />
        </View>
        <View
          style={{
            marginTop: 25,
            marginStart: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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
          </View>
          <View>
            <Text
              style={[
                {
                  fontSize: 30,
                  fontWeight: '500',
                  marginTop: 3,
                  marginEnd: 20,
                },
                theme == 'light'
                  ? {color: priceColor}
                  : {color: darkPriceColor},
              ]}>
              ${price}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              {
                fontSize: 18,
                fontWeight: '600',
                // color: '#000',
                marginTop: 14,
                marginStart: 20,
              },
              theme == 'light' ? {color: txtColor} : {color: '#fff'},
            ]}>
            Select size
          </Text>
          <View style={{marginTop: 10}}>
            <Slider
              sizes={sizes}
              selectedSize={selectedSize}
              handlePress={setSelectedSize}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={[
              {
                width: '91%',
                height: 60,
                borderRadius: 10,
                marginTop: 18,
                alignItems: 'center',
                justifyContent: 'center',
              },
              theme == 'light'
                ? {backgroundColor: '#f5f5f5'}
                : {backgroundColor: '#0F0F0F'},
            ]}
            onPress={() => navigation.navigate('Store', {product})}>
            <Text
              style={[
                {
                  fontSize: 18,
                  fontWeight: '500',
                },
                theme == 'light' ? {color: '#302e2e'} : {color: '#CFC6C6'},
              ]}>
              Find in store
            </Text>
          </TouchableOpacity>
          <View style={{margin: 25}}>
            <Text
              style={
                theme == 'light' ? {color: '#A8AAAC'} : {color: '#545454'}
              }>
              Run the streets in the Nike React Escape Run. tailored for women,
              it features a wider collar and embraidered details. Cushioned foom
              provides a soft. resdonsivefeel on the oo, escape the daily
              routine
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
