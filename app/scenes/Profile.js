import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'

import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

export default class Profile extends Component {
    render() {
        <ViewContainer>
            <StatusbarBackground />

            <View style={styles.profilePicture}>
                <Image source={require('../resources/profile.png')} />
            </View>

            <View style={styles.name}>
                <Text style={nameText}>Wayne Li</Text>
            </View>

            <View style={runnerDescription}>
                <Text style={runnerDescriptionText}>This Is An Description</Text>
                <Text style={runnerDescriptionText}>This Is An Description</Text>
                <Text style={runnerDescriptionText}>This Is An Description</Text>
            </View>

            <View style={personDescription}>
                
            </View>
        </ViewContainer>
    }
}
