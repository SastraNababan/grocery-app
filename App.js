import Expo from 'expo';
import React from 'react';
import {View } from 'react-native'
import {StyleProvider} from 'native-base'
import {Provider } from 'react-redux'
import getTheme from './theme/components'
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
  } 
  render() {
    const themeState='material'
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />
    // }
    return (
      <StyleProvider style={getTheme((themeState === 'platform') ? material : undefined)}>
        <Provider store={store}>
          <AppNavigator onNavigationStateChange={null} />
        </Provider>
      </StyleProvider>  
    );
  }
}


