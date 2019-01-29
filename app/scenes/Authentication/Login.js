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

export default class Login extends Component {
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

                <View style={styles.logo}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../resources/hrt2hrt.png')}
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
                </View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.register}>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerButtonText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </ViewContainer>
        )
    }
}
