import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet, Appearance} from 'react-native';

export default function Search({setTerm}) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const [input, setInput] = useState('');

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput('');
  };

  const PlaceColor =
    theme == 'light'
      ? {placeholderTextColor: 'red'}
      : {placeholderTextColor: 'blue'};

  return (
    <View
      style={[
        styles.container,
        theme == 'light'
          ? {backgroundColor: '#f7f8fa'}
          : {backgroundColor: '#2B3036'},
      ]}>
      <Image
        source={require('../../assets/search.png')}
        style={[
          {width: 28, height: 28, tintColor: '#bbb'},
          theme == 'light' ? {tintColor: '#bbb'} : {tintColor: '#73787F'},
        ]}
      />
      <TextInput
        keyboardAppearance="dark"
        style={styles.txtInput}
        placeholder="Search items"
        placeholderTextColor="#73787F"
        value={input}
        onChangeText={text => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  txtInput: {
    width: '90%',
    height: 48,
  },
});
