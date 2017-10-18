import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import {Text} from 'native-base'
import theme from '../theme/variables'

const {width} = Dimensions.get('window')
const prdWidth = (width - 45) / 2.5

class SwiperProductThumb extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity style={styles.holder} onPress={this.props.onPress}>
        <Image
          style={styles.productImage}
          source={{
          uri: this.props.picture
        }}/>
        <Text style={styles.name} ellipsizeMode='tail' numberOfLines={2}>
          {this.props.name}
        </Text>
        <Text>${this.props.price}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  holder: {
    width: prdWidth,
    marginRight: 15,
    flexDirection: 'column'
  },
  productImage: {
    width: prdWidth,
    height: prdWidth,
    // borderWidth: 0.5, borderColor: theme.listBorderColor
  },
  name: {
    marginTop: 6,
    marginBottom: 6,
    // color: colors.txt_description
  }
})

export default SwiperProductThumb
