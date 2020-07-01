import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../src/config/firebaseConfig'
import {FaFacebookSquare} from 'react-icons/fa';


const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();
export default class Facebook extends Component {


  state = {
    user: null
  }
  login = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({ user })
      })
  }
  logout = () => {
    auth().signOut().then(() => {
      this.setState({ user: null })
    })
  }
  render() {
    const { user } = this.state
    return (
      <div className='FacebookDiv'>
        <button onClick={this.login}>
        <FaFacebookSquare className="Facebook_logo"/>
           Facebook
        </button>

      </div>
    );
  }
}
