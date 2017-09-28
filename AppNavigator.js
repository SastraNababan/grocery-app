import React, { Component } from 'react';
import {Platform} from 'react-native'
import {StackNavigator} from 'react-navigation'
import IndexScreen from './screens/index'
import OtherScreen from './screens/other'

 
const Navigator = StackNavigator(
  {
    IndexScreen: { screen: IndexScreen},
    OtherScreen: { screen: OtherScreen},
  },
{
    initialRouteName: 'IndexScreen',
    headerMode: 'none', 
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


const AppNavigator = () => (
  <Navigator/>
)

export default AppNavigator;
 