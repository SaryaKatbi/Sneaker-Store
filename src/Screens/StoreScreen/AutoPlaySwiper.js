import React, {useState} from 'react';
import {Dimensions, StyleSheet, View, Image, Appearance} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const AutoPlaySwioper = ({images}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View style={styles.container}>
      <SwiperFlatList index={0} autoplayLoop autoplayLoopKeepAnimation={true}>
        {images.map((image, index) => (
          <View
            key={`image${index}`}
            style={[styles.child, {width: 156, height: 156}]}>
            <Image source={image} style={styles.img} />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {width: 156, height: 156, marginBottom: 24},
  child: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 156, height: 156},
});

export default AutoPlaySwioper;
