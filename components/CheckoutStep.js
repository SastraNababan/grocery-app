import { View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import StepIndicator from 'react-native-step-indicator';

const labels = ["Shipping","Payment","Order Summary"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#29c137',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#29c137',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#29c137',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#29c137',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#29c137',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#29c137'
}
export default (prop) => (
  <View style={styles.StepIndicator}>
    <StepIndicator
      customStyles={customStyles}
      labels={labels}
      stepCount={3}
      {...prop}
    /> 
  </View>
)

const styles = StyleSheet.create({
  StepIndicator:{
    backgroundColor:'#F1F1F1',
    padding:10
  }
})
