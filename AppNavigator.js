import React, { Component } from 'react';
import {Platform,View} from 'react-native'
import {StackNavigator,DrawerNavigator} from 'react-navigation'
import HomeScreen from './screens/Home'
import ShopScreen from './screens/Shop'
import CartScreen from './screens/Cart'
import CheckoutScreen from './screens/Checkout'
import PaymentScreen from './screens/Payment'
import OrderSummaryScreen from './screens/OrderSummary'
import OrderSuccessScreen from './screens/OrderSuccess'

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
  CartScreen: { screen: CartScreen},
  CheckoutScreen: { screen: CheckoutScreen},
  PaymentScreen: { screen: PaymentScreen},
  OrderSummaryScreen: { screen: OrderSummaryScreen},
  OrderSuccessScreen: { screen: OrderSuccessScreen},

}

const Drawer = DrawerNavigator(
  routerConfig,
  {
  initialRouteName: "OrderSuccessScreen",
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
 