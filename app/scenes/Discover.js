import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    ListView,
    StyleSheet
} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'
import ListItem from '../components/ListItem'

export default class Discover extends Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this._renderRow = this._renderRow.bind(this)

        var runners = [
            {name: 'Michael'},
            {name: 'Paul'},
            {name: 'Camilla'}
        ]

        this.state = {
            dataSource: ds.cloneWithRows(runners),
            runners: runners
        }
    }

    // TODO:
}
