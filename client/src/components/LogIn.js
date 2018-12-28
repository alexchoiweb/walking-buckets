import React, { Component } from 'react';

import '../styles/LogIn.css';

class LogIn extends Component {
  render() {
    return(
      <div className="div-wrapper">
        <div className="div-logIn fadeIn">
          <h1>Log In</h1>
          <div className="div-form">
            <form method="post" action="/api/auth/login">
              <div>
              <i className="fas fa-user inlineBlock"></i>
                <input type="text" name="username" placeholder="Email"/>
              </div>
              <div>
                <i className="fas fa-unlock-alt"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
              <div>
                <input type="submit" value="Log In" id="button-Submit"/>
              </div>
            </form>
          </div>

          <div className="div-redirectSignUp">
            <span>Not a user yet? <a href="/register" className="linkPrimary">Sign Up Here</a></span>
            <br />
            <div className="div-logout">
              <a href="/logout" className="linkPrimary">Log Out</a>
            </div>
          </div>

          {/* <li><a href="/logout">Log Out</a></li>
          <li><a href="/secret">Secret</a></li>
          <li><a href="/">Input</a></li> */}
        </div>
      </div>
    )
  }
}

export default LogIn;