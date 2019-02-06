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
        return (
                <ViewContainer>
                <StatusbarBackground />

                <View style={styles.profilePicture}>
                    <View style={styles.profilePictureBorder}>
                        <Image style={styles.profilePictureSize} source={require('../resources/profile.png')} />
                    </View>
                </View>

                <View style={styles.name}>
                    <Text style={styles.nameText}>Wayne Li</Text>
                </View>

                <View style={styles.runnerDescription}>
                    <Text style={styles.runnerDescriptionText}>This Is An Description</Text>
                    <Text style={styles.runnerDescriptionText}>This Is An Description</Text>
                    <Text style={styles.runnerDescriptionText}>This Is An Description</Text>
                </View>

                <View style={styles.personDescription}>
                    <View style={styles.columnOne}>
                        <Text style={styles.personDescriptionText}>Date</Text>
                        <Text style={styles.personDescriptionText}>Goal</Text>
                        <Text style={styles.personDescriptionText}>Current</Text>
                    </View>
                    <View style={styles.columnTwo}>
                        <Text style={styles.personDescriptionText}>2019.01.01</Text>
                        <Text style={styles.personDescriptionText}>1234</Text>
                        <Text style={styles.personDescriptionText}>1200</Text>
                    </View>
                </View>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    profilePicture: {
        alignItems: 'center',
        marginTop: 80,
    },
    profilePictureSize: {
        width: 100,
        height: 100
    },
    profilePictureBorder: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2C0F66',
        height: 110,
        width: 110,
        borderRadius: 55,
        overflow: 'hidden'
    },
    name: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 24
    },
    nameText: {
        fontSize: 24,
        color: '#2C0F66'
    },
    runnerDescription: {
        alignItems: 'center',
        marginBottom: 100,
        paddingRight: 35,
        paddingLeft: 35
    },
    runnerDescriptionText: {
        fontSize: 12
    },
    personDescription: {
        flex: 1,
        flexDirection: 'row'
    },
    personDescriptionText: {
        fontSize: 14,
        marginBottom: 40
    },
    columnOne: {
        flex: 1,
        alignItems: 'center',
    },
    columnTwo: {
        flex: 1,
        alignItems: 'center',
    }

})
