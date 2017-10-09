import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import {Text,Icon} from 'native-base'
import Line from './Line'

// import colors from './../styles/colors' import Icon from
// 'react-native-vector-icons/FontAwesome' import Line from './Line'

class Panel extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    onPressSeeAll: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  render() {
    let headerLeftPartStyle = (this.props.description)
      ? {
        justifyContent: 'center'
      }
      : {
        flexDirection: 'row',
        alignItems: 'center'
      }
    return (
      <View>
        <View style={styles.holder}>
          <View style={styles.header}>
            <View style={headerLeftPartStyle}>
              <Text style={{
                fontSize: 20,
                fontWeight:'700'
              }}>{this.props.title}</Text>
              <Text note>{this.props.description}</Text>
            </View>
            <TouchableOpacity
              onPress={this.props.onPressSeeAll}
              style={styles.headerRightPart}>
              <Text
                style={{
                marginRight: 10,
                color: colors.txt_dark
              }}>See All</Text>
              <Icon
                style={{
                color: colors.txt_dark
              }}
                name='ios-arrow-forward'
                size={23}/>
            </TouchableOpacity>
          </View>
          {this.props.children}
        </View>
        {/* <Line color="#CCC"/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'column',
    paddingBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  headerRightPart: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default Panel

const colors = {}
