import React, { Component} from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

// The purpose of the StatusbarBackground is to save the space for the screen heading row

export default class StatusbarBackground extends Component {
    render() {
        return (
            <View style={styles.statusbarBackground}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusbarBackground: {
        height: 20
    }
})
