import React, {useState} from 'react';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen/ProductDetailsScreen';
import CustomSlider from './src/Conponents/CustomSlider';
import {useWindowDimensions, Appearance} from 'react-native';
import StoreScreen from './src/Screens/StoreScreen/StoreScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Root = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:
          theme == 'light'
            ? {backgroundColor: '#FAFDFF'}
            : {backgroundColor: '#060a0d'},
        drawerLabelStyle: {fontSize: 16},
        headerShown: false,
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerActiveBackgroundColor: theme == 'light' ? '#C3FAFF' : '#061c1f',
        drawerActiveTintColor: theme == 'light' ? '#0C2325' : '#45CCD9',
        drawerInactiveTintColor: theme == 'light' ? '#0C2325' : '#45CCD9',
      }}
      drawerContent={props => <CustomSlider {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Store" component={StoreScreen} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
