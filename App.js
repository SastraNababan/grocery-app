import Expo from 'expo';
import React from 'react';
import {View } from 'react-native'
import {StyleProvider} from 'native-base'
import {Provider } from 'react-redux'
import getTheme from './theme/components'
import theme from './theme/variables'
import platform from './theme/variables/platform'
import material from './theme/variables/material'



import store from './store'
import AppNavigator from './AppNavigator'



export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      // 'Lato' : require('./theme/fonts/Lato/Lato-Regular.ttf')
      'SourceSansPro' : require('./theme/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf'),
      'SourceSansPro_bold' : require('./theme/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf'),
      'SourceSansPro_italic' : require('./theme/fonts/Source_Sans_Pro/SourceSansPro-Italic.ttf')
      
      // 'Roboto' : require('./theme/fonts/Roboto/Roboto-Medium.ttf')
    });
    this.setState({isReady: true})
    
  } 
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <StyleProvider style={getTheme(theme)}>
        <Provider store={store}>
          <AppNavigator onNavigationStateChange={null} />
        </Provider>
      </StyleProvider>  
    );
  }
}


