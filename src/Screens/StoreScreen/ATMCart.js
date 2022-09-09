import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Appearance,
} from 'react-native';
import CustomImageCarousalLandscape from './CustomImageCarousalLandscape';

const ATMCart = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const data = [
    {
      image:
        theme == 'light'
          ? require('../../../assets/lightCart1.png')
          : require('../../../assets/darkCart1.png'),
    },
    {
      image:
        theme == 'light'
          ? require('../../../assets/lightCart2.png')
          : require('../../../assets/darkCart2.png'),
    },
    {
      image:
        theme == 'light'
          ? require('../../../assets/lightCart3.png')
          : require('../../../assets/darkCart3.png'),
    },
  ];

  return (
    <SafeAreaView
      style={[
        styles.container,
        theme == 'light'
          ? {backgroundColor: 'white'}
          : {backgroundColor: '#000508'},
      ]}>
      <View style={styles.carouselContainer}>
        <CustomImageCarousalLandscape data={data} autoPlay={false} />
      </View>
    </SafeAreaView>
  );
};

export default ATMCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {textAlign: 'center', color: 'black', marginBottom: 10},
  carouselContainer: {
    marginBottom: 20,
  },
});
