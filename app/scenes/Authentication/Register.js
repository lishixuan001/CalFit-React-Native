import React, { Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import {styles} from './styles'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.logoReg}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../resources/logo.png')}
                    />
                </View>

                <View style={styles.inputButtons}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        placeholder="EMAIL"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        returnKeyType="next"
                        keyboardAppearance="dark"
                    />

                    <View style={styles.hairline} />

                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        placeholder="PASSWORD"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        autoCorrect={false}
                        returnKeyType="go"
                        keyboardAppearance="dark"
                    />

                    <View style={styles.hairline} />

                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            placeholder="RE-PASSWORD"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            autoCorrect={false}
                            returnKeyType="go"
                            keyboardAppearance="dark"
                        />

                        <View style={styles.hairline} />
                </View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>
                            CREATE ACCOUNT
                        </Text>
                    </TouchableOpacity>
                </View>
            </ViewContainer>
        )
    }
}
