import React, { Component } from 'react';
import {Platform,View,Text} from 'react-native'
import {StackNavigator,DrawerNavigator} from 'react-navigation'
import ShopScreen from './screens/Shop'
import HomeScreen from './screens/Home'
import {DrawerMenu} from './components/'

// const Navigator = StackNavigator(routerConfig,
//   {
//     initialRouteName: 'DrawerScreen',
//     headerMode: 'none', 
//     mode: Platform.OS === 'ios' ? 'modal' : 'card',
//   }
// );

const routerConfig ={
  HomeScreen: { screen: HomeScreen},
  ShopScreen: { screen: ShopScreen},
}

const Drawer = DrawerNavigator(
  routerConfig,
  {
  initialRouteName: "HomeScreen",
  contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});

const AppNavigator = () => (
  <Drawer/>
)

export default AppNavigator;
 