import React from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    signup = () => {
        this.props.signup(this.state.email.toLowerCase(), this.state.password)
    }

    render = () => {
        return (
            <View>
                <TextInput onChangeText = {(text) => this.setState({email: text})} style={styles.textInput} placeholder='email' />
                <TextInput onChangeText = {(text) => this.setState({password: text})} style={styles.textInput} placeholder='password' secureTextEntry />
                <TouchableHighlight
                    style={{backgroundColor: 'grey'}} 
                    onPress = {() => this.signup()}>
                    <Text
                    style={styles.btnText}
                    >Signup</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{backgroundColor: 'blue'}} 
                    onPress = {() => this.props.loginActive(true)}>
                    <Text
                    style={styles.btnText}
                    >Go To Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

