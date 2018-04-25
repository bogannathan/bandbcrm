import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
// import t from 'tcomb-form-native';
// // https://github.com/gcanti/tcomb-form-native

// const Phone = t.subtype(t.String, (phone) => {
//     const reg = /^\d{3}-\d{3}-\d{3}$/;
//     return reg.test(phone);
//   });
  

export default class AddCustomer extends React.Component {
    render = () => {
        return (
            <View style={styles.addCustomerView}>
                <View style={{flex: 1}} />
                <View style={{flex: 8}}>
                    <TouchableHighlight 
                        style={{backgroundColor: 'orange', marginBottom: 10}}
                        onPress = {() => this.login()}>
                        <Text >Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={{backgroundColor: 'purple'}}
                        onPress = {() => this.props.loginActive(false)}>
                        <Text >Go to signup</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 1}} />
            </View>
        )
    }
}