import React, { Component } from 'react';
import {Platform,View} from 'react-native'
import {StackNavigator,DrawerNavigator} from 'react-navigation'
import HomeScreen from './screens/Home'
import ShopScreen from './screens/Shop'
import ProductScreen from './screens/Product'
import CartScreen from './screens/Cart'
import CheckoutScreen from './screens/Checkout'
import PaymentScreen from './screens/Payment'
import OrderSummaryScreen from './screens/OrderSummary'
import TestScreen from './screens/Test'

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
  ProductScreen: { screen: ProductScreen},
  CartScreen: { screen: CartScreen},
  CheckoutScreen: { screen: CheckoutScreen},
  PaymentScreen: { screen: PaymentScreen},
  OrderSummaryScreen: { screen: OrderSummaryScreen},
  TestScreen: { screen: TestScreen},
  
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
 