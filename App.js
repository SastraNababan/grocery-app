import Expo from 'expo';
import React from 'react';
import {View } from 'react-native'
import {StyleProvider} from 'native-base'
import {Provider } from 'react-redux'
import getTheme from './theme/components'
import material from './theme/variables/material'
import platform from './theme/variables/platform'
import common from './theme/variables/commonColor'

import configureStore from './store'
import AppNavigator from './AppNavigator'

const store = configureStore()

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({isReady: true})
    
  } 
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <StyleProvider style={getTheme(common)}>
        <Provider store={store}>
          <AppNavigator onNavigationStateChange={null} />
        </Provider>
      </StyleProvider>  
    );
  }
}


