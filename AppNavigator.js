import React, { Component } from 'react';
import {Platform} from 'react-native'
import {StackNavigator} from 'react-navigation'
import ShopScreen from './screens/Shop'
import HomeScreen from './screens/Home'

 
const Navigator = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen},
    ShopScreen: { screen: ShopScreen},
  },
{
    initialRouteName: 'HomeScreen',
    headerMode: 'none', 
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


const AppNavigator = () => (
  <Navigator/>
)

export default AppNavigator;
 