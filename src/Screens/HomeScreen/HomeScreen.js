import React, {useState} from 'react';
import {View, Appearance, StatusBar} from 'react-native';
import Categories from '../Categories';
import Header from '../../Conponents/Header';
import Search from '../../Conponents/search';

export default function HomeScreen() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const [term, setTerm] = useState('sneaker');
  const products = [
    {
      id: 1,
      name: 'Super Sneaker',
      category: 'Man Running Shoes',
      price: '135',

      images: [
        require('../../../assets/sneaker11(1).png'),
        require('../../../assets/sneaker11(2).png'),
        require('../../../assets/sneaker11(3).png'),
        require('../../../assets/sneaker11(4).png'),
      ],

      colors: {
        primary: '#ebf3f5',
        secondary: '#bed4d6',
        priceColor: '#539fa6',
        cartColor: '#f4f8f9',
        bgColor: '#ffffff',
        txtColor: '#0c2325',
        darkPrimary: '#16191a',
        darkSecondary: '#3c4b4d',
        darkPriceColor: '#176b73',
        darkCartColor: '#252626',
        darkBgColor: '#000508',
        darkTxtcolor: '#ffffff',
        buyColor: '#082426',
        darkBuyColor: '#2bcad9',
      },

      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    },
    {
      id: 2,
      name: 'Pink Sneaker',
      category: 'Man Running Shoes',
      price: '95',

      images: [
        require('../../../assets/sneaker11.png'),
        require('../../../assets/sneaker12.png'),
        require('../../../assets/sneaker13.png'),
        require('../../../assets/sneaker14.png'),
      ],

      colors: {
        primary: '#f5f5eb',
        secondary: '#d6bec3',
        priceColor: '#a65365',
        cartColor: '#f9f9f4',
        bgColor: '#fff',
        txtColor: '#0c2325',
        darkPrimary: '#1a1a16',
        darkSecondary: '#4d3c40',
        darkPriceColor: '#781127',
        darkCartColor: '#262625',
        darkBgColor: '#000508',
        darkTxtcolor: '#fff',
        buyColor: '#26060d',
        darkBuyColor: '#d9214c',
      },

      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    },
    {
      id: 3,
      name: 'Super Sneaker',
      category: 'Man Running Shoes',
      price: '135',

      images: [
        require('../../../assets/sneaker21.png'),
        require('../../../assets/sneaker22.png'),
        require('../../../assets/sneaker23.png'),
        require('../../../assets/sneaker24.png'),
      ],

      colors: {
        primary: '#f5ebed',
        secondary: '#c8bed6',
        priceColor: '#7753a6',
        cartColor: '#f9f4f7',
        bgColor: '#fff',
        txtColor: '#0c2325',
        darkPrimary: '#1a1616',
        darkSecondary: '#433c4d',
        darkPriceColor: '#411280',
        darkCartColor: '#262526',
        darkBgColor: '#000508',
        darkTxtcolor: '#fff',
        buyColor: '#190730',
        darkBuyColor: '#6f1ed9',
      },

      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    },
    {
      id: 4,
      name: 'Super Sneaker',
      category: 'Man Running Shoes',
      price: '135',

      images: [
        require('../../../assets/sneaker31.png'),
        require('../../../assets/sneaker32.png'),
        require('../../../assets/sneaker33.png'),
        require('../../../assets/sneaker34.png'),
      ],

      colors: {
        primary: '#edebec',
        secondary: '#d6bebe',
        priceColor: '#a65353',
        cartColor: '#f9f4f4',
        bgColor: '#fff',
        txtColor: '#0c2325',
        darkPrimary: '#1a1618',
        darkSecondary: '#4d3c3c',
        darkPriceColor: '#801212',
        darkCartColor: '#262525',
        darkBgColor: '#000508',
        darkTxtcolor: '#fff',
        buyColor: '#260505',
        darkBuyColor: '#d91e1e',
      },

      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    },
    {
      id: 5,
      name: 'Super Sneaker',
      category: 'Man Running Shoes',
      price: '135',

      images: [
        require('../../../assets/sneaker41.png'),
        require('../../../assets/sneaker42.png'),
        require('../../../assets/sneaker43.png'),
        require('../../../assets/sneaker44.png'),
      ],

      colors: {
        primary: '#f5efeb',
        secondary: '#d6bebe',
        priceColor: '#a67453',
        cartColor: '#f9f7f4',
        bgColor: '#fff',
        txtColor: '#0c2325',
        darkPrimary: '#1a1716',
        darkSecondary: '#4d3c3c',
        darkPriceColor: '#803e12',
        darkCartColor: '#262625',
        darkBgColor: '#000508',
        darkTxtcolor: '#fff',
        buyColor: '#261305',
        darkBuyColor: '#d9691e',
      },

      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    },
    {
      id: 6,
      name: 'Super Sneaker',
      category: 'Man Running Shoes',
      price: '135',

      images: [
        require('../../../assets/sneaker51.png'),
        require('../../../assets/sneaker52.png'),
        require('../../../assets/sneaker53.png'),
        require('../../../assets/sneaker54.png'),
      ],

      colors: {
        primary: '#ebeced',
        secondary: '#bec9d6',
        priceColor: '#46688c',
        cartColor: '#f4f5f9',
        bgColor: '#ffffff',
        txtColor: '#0c2325',
        darkPrimary: '#16181a',
        darkSecondary: '#3c444d',
        darkPriceColor: '#054080',
        darkCartColor: '#252526',
        darkBgColor: '#000508',
        darkTxtcolor: '#ffffff',
        buyColor: '#021326',
        darkBuyColor: '#096dd9',
      },

      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    },
  ];

  return (
    <View
      style={[
        {flex: 1},
        theme == 'light'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#000508'},
      ]}>
      <StatusBar backgroundColor={'black'} />
      <Header />
      <Search setTerm={setTerm} />
      <Categories products={products} setTerm={setTerm} term={term} />
    </View>
  );
}
