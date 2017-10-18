'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import theme from '../theme/variables'
// import colors from './../../styles/colors'
const colors={}
const { width } = Dimensions.get('window')
const prdWidth = (width - 45) / 2
 


class GridProductThumb extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    return (
			<TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>
				<Image  style={ styles.productImage } source={{ uri: this.props.picture }} />
				<Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
					{ this.props.name }
				</Text>
				{/* <View style={ styles.promotionHolder }>
          <Text style={[ styles.name, { textDecorationLine: 'line-through' } ]}>${ this.props.regularPrize }</Text>
          <Text style={ styles.name }> | { this.props.discountPercent }% off</Text>
				</View>  */}
			</TouchableOpacity>
    )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: prdWidth,
        // height: (prdWidth / 2) ,
        // borderWidth:1,
        // borderColor:"#000"
        //  borderWidth: 0.5, borderColor: theme.listBorderColor,
        //  borderWidth: 0.5,
         overflow:'hidden',
         marginBottom:25
    },
    productImage: {
        width: prdWidth,
        height: prdWidth / 2 ,
        // borderWidth: 0.5,
        // borderColor:'red',
        // padding:5
        margin:5
        // borderColor: colors.bd_input
    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: colors.txt_description,
        textAlign:'center',
        fontWeight:'700'
    },
    promotionHolder: {
        flexDirection: 'row'
    }
})

export default GridProductThumb
