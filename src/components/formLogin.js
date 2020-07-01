import React, {Component} from 'react';
import {useForm} from "react-hook-form"


export default function ToolLogin(){
  return(
    <form className="loginForm">
    <h2 className="headerLoginUsername"> Username </h2>
    <input type="text" placeholder="Username" className="loginUsername" />
    <br></br>
    <h2 className="headerLoginPassword"> Password</h2>
    <input type="text" placeholder="Password" className="loginPassword" />
    <br></br>
    <button type="submit"  className="loginSubmit"> Lets Skate!</button>
    <p className="forgotUsernamePassword"> Forgot Username or Password?</p>
    </form>
  )
}
