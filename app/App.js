import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'

export default class App extends Component {
    render() {
        return (
            <Register />
        )
    }
}
