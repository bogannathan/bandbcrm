import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class NavBar extends React.Component {
    //just some filler shit for now, we will update the navbar to not look so badly soon
    render() {
        return (
            <View style={{paddingTop: Expo.Constants.statusBarHeight, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={{textAlign: 'left', fontSize: 20}}>Settings</Text>
                    <Text style={{fontSize: 30, color: 'blue', textAlign: 'center'}}>
                        bANDbCRM
                    </Text>
                    <TouchableHighlight onPress={() => this.props.clickLogout()}>
                        <Text style={{fontSize: 20, textAlign: 'right'}}>Log out</Text>
                    </TouchableHighlight>
            </View>
        )
    }
}
