import React, { Component } from 'react';
import {Platform} from 'react-native'
import {StackNavigator} from 'react-navigation'
import StoreScreen from './screens/store'
import OtherScreen from './screens/other'

 
const Navigator = StackNavigator(
  {
    StoreScreen: { screen: StoreScreen},
    OtherScreen: { screen: OtherScreen},
  },
{
    initialRouteName: 'StoreScreen',
    headerMode: 'none', 
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


const AppNavigator = () => (
  <Navigator/>
)

export default AppNavigator;
 