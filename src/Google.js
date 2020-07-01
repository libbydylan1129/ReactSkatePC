import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../src/config/firebaseConfig';
import {FaGoogle} from 'react-icons/fa';
import Header from './Header.js'


 class Google extends Component{


  render(){


    const {
  user,
  signOut,
  signInWithGoogle,
} = this.props;
return (
  <div className="Login">
    <header className="Google-header">
    <div className = "displayName">
      {
        user
          ? user.displayName
           : <p></p>
      }
      </div>
      {
        user
         ? <button className="googleSignOut" onClick={signOut}>Sign out</button>
          : <button className="GoogleSignIn" onClick={signInWithGoogle}><FaGoogle className="Google_icon"/>Google</button>
      }
    </header>
  </div>
);
  }
}

const firebaseApp = firebase.initializeApp(firebaseConfig);


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
     providers,
     firebaseAppAuth,
}) (Google);
