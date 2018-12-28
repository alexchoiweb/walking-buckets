import React, { Component } from 'react';

import '../styles/Register.css'

class Register extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="div-register fadeIn">
        <h1>Sign Up</h1>
        <div className="div-form">
          <form method="post" action="/api/auth/register">
            <div>
              <i className="fas fa-user inlineBlock"></i>
              <input type="text" name="username" placeholder="Email"/>
            </div>
            <div>
              <i className="fas fa-unlock-alt"></i>
              <input type="password" name="password" placeholder="Password"/>
            </div>
            <div>
              <i className="fas fa-unlock-alt"></i>
              <input type="password" name="passwordConfirm" placeholder="Confirm Password"/>
            </div>
            <div>
              <input type="submit" value="Sign Up!" id="button-Submit"/>
            </div>
        </form>
        </div>

        <div className="div-redirectLogIn">
          <span>Already have an account? <a href="/login" className="linkPrimary">Log In</a></span>
        </div>

        {/* <li><a href="/login">Log In</a></li>
        <li><a href="/logout">Log Out</a></li>
        <li><a href="/secret">Secret</a></li>
        <li><a href="/">Input</a></li> */}
      </div>
      </div>
    )
  }
}

export default Register;