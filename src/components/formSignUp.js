import React, {Component} from 'react';
import {useForm} from "react-hook-form"

export default function ToolSignUp(){
  return(
    <form className="signUpForm">
    <h2 className="headerSignUpFirstName"> First Name</h2>
    <input type="text" placeholder="First Name" className="firstName" />
    <br></br>
    <h2 className="headerLastNameSignUp"> Last Name</h2>
    <input type="text" placeholder="Last Name" className="lastName" />
    <br></br>
    <h2 className="headerSignUpUsername">Username</h2>
    <input type="text" placeholder="Username" className="signUpUsername" />
    <br></br>
    <h2 className="headerSignUpEmail"> Email</h2>
    <input type="text" placeholder="Email" className="email" />
    <br></br>
    <br></br>
    <h2 className="headerSignUpPassword">Password</h2>
    <input type="text" placeholder="Password" className="signUpPassword" />
    <br></br>
    <h2 className="headerSignUpPasswordConfirm">Password Confirm</h2>
    <input type="text" placeholder="Password Confirm" className="passwordConfirm" />
    <br></br>
    <button type="submit" className="signUpSubmit">Lets Skate!</button>
    </form>
  )
}
