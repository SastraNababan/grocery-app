import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet} from 'react-native'

// import colors from './../styles/colors'
const colors={}
class Line extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        color: PropTypes.string
    }

    static defaultProps = {
        color: colors.bd_line
    }

    render() {
        return <View style={[styles.line, { backgroundColor: this.props.color }, this.props.style || {}] }></View>
    }
}

const styles = StyleSheet.create({
    line: {
        height: 1
    }
})

export default Line
