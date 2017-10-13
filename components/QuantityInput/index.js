import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class QuantityInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.initialValue.toString(),
    }
    this.minusButton= this.minusButton.bind(this)
    this.plusButton= this.plusButton.bind(this)
  }
  
  _renderMinusButton(){
    return(
      <TouchableHighlight underlayColor={'#999999'} onPress={this.minusButton} style={[styles.button, this.props.styleButton]}>
      <Image source={require('./minus.png')} style={this.props.styleImage} />
      </TouchableHighlight>
    )
  }
  _renderInput(){
    return (
      <TextInput
      style={[styles.textinput, this.props.styleTextInput]}
      editable={this.props.editable}
      keyboardType={'numeric'}
      value={this.state.value}
      onChangeText={(text) => this.onChangeText(text)}/>
    )
  }

  _renderPlusButton(){
    return (
      <TouchableHighlight underlayColor={'#999999'} onPress={this.plusButton} style={[styles.button, this.props.styleButton]}>
        <Image source={require('./plus.png')} style={this.props.styleImage} />
      </TouchableHighlight> 
    )
  }


  render() {
    if (this.props.orientation=='vertical') {
      return (
        <View style={this.props.styleWraper}>
          <View style={styles.vertical}>
            {this._renderPlusButton()}
            {this._renderInput()}
            {this._renderMinusButton()}
          </View>
        </View>
      )
    }
    return (
      <View style={this.props.styleWraper}>
        <View style={styles.horizontal}>
          {this._renderMinusButton()}
          {this._renderInput()}
          {this._renderPlusButton()}
        </View>
      </View>
    )

  }

  plusButton(){
    if(this.state.value != this.props.max){
      var value = (parseInt(this.state.value) + parseInt(this.props.stepsize)).toString();
      this.setState({
        value: value
      });
      this.props.onChangeText(value);
    }
  }

  minusButton(){
    if(this.state.value != this.props.min){
      var value = (parseInt(this.state.value) - parseInt(this.props.stepsize)).toString();

      this.setState({
        value: value
      });

      this.props.onChangeText(value);
    }
  }

  onChangeText(text) {
    if(!isNaN(text)){
      this.setState({
        value: text
      });

      this.props.onChangeText(text);
    } else {
      this.setState({
        value: "0"
      })

      this.props.onChangeText("0");
    }
  }

}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  verticle: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  },
  textinput: {
    // flex:4,
    backgroundColor: '#eeeeee',
    padding: 5,
    textAlign: 'center'
  },
  button: {
    // flex:2,
    backgroundColor: '#dedede',
    padding: 5,
    justifyContent:'center'
  },
  image: {
    width: 18,
    height: 18
  }
});


QuantityInput.propTypes={
  initialValue : PropTypes.number,
  min : PropTypes.number,
  max : PropTypes.number,
  stepsize:PropTypes.number,
  editable:PropTypes.bool,
  orientation:PropTypes.string,
  styleWrapper :PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  styleTextInput :PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  styleButton :PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  styleImage :PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  // iconPlus:PropTypes.node
}

QuantityInput.defaultProps = {
  initialValue: 0,
  min: 0,
  max: null,
  stepsize:1,
  editable:false,
  styleTextInput: styles.textinput,
  styleButton:styles.button,
  styleImage:styles.image,
  orientation:'horizontal'
  // iconPlus:<Image source={require('./minus.png')} style={this.props.styleImage} />
};
