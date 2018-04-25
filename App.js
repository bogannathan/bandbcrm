import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import Auth from './src/screens/Auth';
import * as firebase from 'firebase';
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import NavBar from './src/components/NavBar';
import AddCustomer from './src/screens/Customer/addCustomer';

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      checkedForUser: false
    }
  }

  componentDidMount = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user})
        console.log(user)
      }
      this.setState({checkedForUser: true})
    })
  }

  logout = () => {
    console.log('pressed')
    firebase.auth().signOut()
    this.setState({user: null})
  }

  addData = () => {
    //this adds some filler data for now. definitely different from firebase. you can see the console.log in the xpo app to see what it returns. 
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    });
  }

  protectedViews = () => {
    //in the return, must return one element: cannot return 3 sibling texts. so wrap it in a parent view.
    //obnoxiously, this requires us to flex: 1 the views, so that they fill the mainView in our main render
    if (this.state.checkedForUser) {
      if (this.state.user) {
        return (
          <AddCustomer />
          // <View style={{flex: 1}}><Text>This is the main page for authorized users</Text>
          // <Text>Shake your phone to open the developer menu.</Text>
          // <Button onPress={() => this.addData()} title='Add data'></Button></View>
        )
      } else {
        return (
          <Auth />
        )
      }
    } else {
      return (
        <View style={{ flex: 1}}>
          <ActivityIndicator
            size="large"
            color='grey'
          />
        </View>
      )
    } 
  }

  render = () => {
    return (
      <View style={styles.container}>
        <NavBar clickLogout={this.logout} />
          {this.protectedViews()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
