import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/LogIn.css';

class LogIn extends Component {
  render() {
    return(
      <div className="div-wrapper">
        <div className="div-logIn fadeIn">
          <h1>Log In</h1>
          <div className="div-form">
            <form method="POST" action="/api/auth/login">
              <div>
                <i className="fas fa-user inlineBlock"></i>
                <input type="text" name="username" placeholder="Email" />
              </div>
              <div>
                <i className="fas fa-unlock-alt"></i>
                <input type="password" name="password" placeholder="Password" />

              </div>
              <div>
                <input type="submit" value="Log In" id="button-Submit" />
              </div>
            </form>
          </div>

          <div className="div-redirectSignUp">
            {/* <span>Not a user yet? <a href="/register" className="linkPrimary">Sign Up Here</a></span> */}
            <span>Not a user yet? <Link to="/register" className="linkPrimary">Sign Up Here</Link></span>
            <br />
            <div className="div-logout">
              <Link to="/logout" className="linkPrimary">Log Out</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn;