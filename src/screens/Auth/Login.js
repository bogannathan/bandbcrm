import React from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        this.props.login(this.state.email.toLowerCase(), this.state.password)
    }

    render = () => {
        return (
            <View style={styles.textBtnView}>
                <View style={{flex: 1}} />
                <View style={{flex: 8}}>
                    <TextInput onChangeText = {(text) => this.setState({email: text})} style={styles.textInput} placeholder='email' />
                    <TextInput onChangeText = {(text) => this.setState({password: text})} style={styles.textInput} placeholder='password' secureTextEntry />
                    <TouchableHighlight 
                        style={{backgroundColor: 'orange', marginBottom: 10}}
                        onPress = {() => this.login()}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{backgroundColor: 'purple'}}
                        onPress = {() => this.props.loginActive(false)}>
                        <Text style={styles.btnText}>Go to signup</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 1}} />
            </View>
        )
    }
}

