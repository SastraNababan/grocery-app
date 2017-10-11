import React, { Component } from 'react'
import { View,Text } from 'react-native'
import {QuantityInput} from '../components'
import {Container,Content} from 'native-base'
export default class TestScreen extends Component {
  state = {  }
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{width:200,height:50}}>
          <QuantityInput 
            style={{flex:1}}
            min={2}
            max={6}
            initialValue={5}
            onChangeText={() => console.log('change')}
            styleTextInput={{fontSize:24}}
          />
        </View>
      </View>
    )
  }
}
