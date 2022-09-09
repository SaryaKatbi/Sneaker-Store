import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  Linking,
  View,
  Appearance,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSlider = props => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          },
        ]}>
        <Image
          style={styles.CustomSlider}
          source={require('../../assets/saryaAvatar.png')}
        />
        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: '400',
              marginTop: 16,
              marginStart: 12,
            },
            theme == 'light' ? {color: '#0C2325'} : {color: '#45CCD9'},
          ]}>
          Sarya Katby
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Follow Us"
          labelStyle={[
            {fontSize: 16},
            theme == 'light' ? {color: '#0c2325'} : {color: '#45ccd9'},
          ]}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/katbysarya/')
          }
          pressColor={theme == 'light' ? '#637c80' : '#1c2324'}
        />
        <DrawerItem
          label="Rate Us ⭐"
          labelStyle={[
            {fontSize: 16},
            theme == 'light' ? {color: '#0c2325'} : {color: '#45ccd9'},
          ]}
          onPress={() => Linking.openURL('https://github.com/saryakatby')}
          pressColor={theme == 'light' ? '#637c80' : '#1c2324'}
        />
      </DrawerContentScrollView>
      <View
        style={[
          {
            width: 210,
            height: 1,
            backgroundColor: '#262626',
            alignItems: 'center',
            marginHorizontal: 10,
          },
          theme == 'light'
            ? {backgroundColor: '#404040'}
            : {backgroundColor: '#d9d9d9'},
        ]}
      />
      <View
        style={[
          {
            width: 210,
            height: 0.1,
            alignItems: 'center',
            marginHorizontal: 10,
          },
          theme == 'light'
            ? {backgroundColor: '#262626'}
            : {backgroundColor: '#D9D9D9'},
        ]}
      />
      <TouchableOpacity style={{padding: 10}}>
        <View style={{flexDirection: 'row', marginStart: 10}}>
          <Text
            style={[
              {fontSize: 14, fontWeight: '500'},
              theme == 'light' ? {color: '#262626'} : {color: '#d9d9d9'},
            ]}>
            Log in
          </Text>
          <Image
            source={require('../../assets/login.png')}
            style={[
              {
                width: 24,
                height: 24,
                marginStart: 112,
              },
              theme == 'light'
                ? {tintColor: '#262626'}
                : {tintColor: '#d9d9d9'},
            ]}
          />
        </View>
      </TouchableOpacity>
      <View
        style={[
          {
            width: 210,
            height: 1,
            alignItems: 'center',
            marginHorizontal: 10,
          },
          theme == 'light'
            ? {backgroundColor: '#262626'}
            : {backgroundColor: '#d9d9d9'},
        ]}
      />
      <TouchableOpacity style={{padding: 10}}>
        <View style={{flexDirection: 'row', marginStart: 10}}>
          <Text
            style={[
              {fontSize: 14, fontWeight: '500'},
              theme == 'light' ? {color: '#262626'} : {color: '#d9d9d9'},
            ]}>
            Sigh In
          </Text>
          <Image
            source={require('../../assets/siginin.png')}
            style={[
              {
                width: 21,
                height: 24,
                marginStart: 110,
              },
              theme == 'light'
                ? {tintColor: '#262626'}
                : {tintColor: '#d9d9d9'},
            ]}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CustomSlider: {
    width: 70,
    height: 70,
    marginStart: 20,
    marginTop: 20,
  },

  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },

  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSlider;
