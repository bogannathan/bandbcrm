import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Login from './Login';
import Signup from './Signup';
import firebase from 'firebase';

export default class Auth extends React.Component {
    
    constructor(props) {
        super(props) 
        this.state = { 
            loginActive: true
        }
    }

    switchTab = (loginActive) => {
        this.setState({ loginActive })
    }

    signup = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            alert('Your account was successfully created!')
        })
        .catch(res => {
            console.log('error ', res)
            if(res){
                switch(res.code){
        
                case "auth/email-already-in-use":
                    alert("This email is already in use. Please try to log in or use a different email address");
                break;
        
                case "auth/invalid-email":
                    alert("The specified email is not a valid email.");
                break;
        
                default:
                    alert('Unknown error. Please try again.');
                }
            }
        })
    }

    login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
        })
        .catch(res => {
            
        if(res){
            console.log('error ', res.code)
            switch(res.code){
    
            case 'auth/wrong-password':
                alert('The password is not correct. Please try again')
            break
            case 'auth/user-not-found':
                alert('This email is not associated with an account. Please try again.')
            break
            case "auth/invalid-email":
                alert('The specified email is not a valid email. Please try again.');
            break
    
            default:
                alert('Unknown error. Please try again.')
            }
        }
        })
    }

    render = () => {
        return (
            <View style={styles.viewFlex}>
                {this.state.loginActive  ?
                <View style={styles.viewFlex}>
                    <Login login={this.login} loginActive={this.switchTab} />
                </View>
                :
                <View style={styles.viewFlex}>
                    <Signup signup={this.signup} loginActive={this.switchTab} />
                </View>
                }
                <View style={{flex: 3}} />
            </View>
        )
    }
}