import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
import Profile from './scenes/Profile'

export default class App extends Component {
    render() {
        return (
            <Login />
        )
    }
}
