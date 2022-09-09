import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import FavoriteButton from '../../Conponents/Favorite';

const Swiper = ({images}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            width: 35,
            height: 35,
            position: 'relative',
            marginTop: 20,
            marginStart: 14,
          }}>
          <Image
            source={require('../../../assets/back.png')}
            style={[
              {width: 32, height: 32},
              theme == 'light' ? {tintColor: '#0c2325'} : {tintColor: '#fff'},
            ]}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            position: 'relative',
            marginTop: 21,
            alignItems: 'flex-end',
            marginEnd: 14,
          }}>
          <FavoriteButton />
        </View>
      </View>
      <SwiperFlatList
        index={0}
        showPagination
        paginationStyle={{height: 340}}
        paginationDefaultColor={theme == 'light' ? '#A8AAAC' : '#302E2E'}
        paginationActiveColor={theme == 'light' ? '#302E2E' : '#A8AAAC'}
        paginationStyleItem={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
        }}>
        {images.map((image, index) => (
          <View key={`image${index}`} style={[styles.child]}>
            <Image source={image} style={styles.img} />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {width: '100%', height: 380},
  child: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {fontSize: width * 0.5, textAlign: 'center'},
  img: {width: 350, height: 350},
});

export default Swiper;
