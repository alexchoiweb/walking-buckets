import React, { Component } from 'react';

import '../styles/LogIn.css';

class LogIn extends Component {
  // state = {
  //   username: '',
  //   password: '',
  // }

  // handleChange = this.handleChange.bind(this);
  // handleSubmit = this.handleSubmit.bind(this);

  // handleChange(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  // handleSubmit() {
  //   fetch(`/api/auth/login`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },  
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //   })
  // }

  render() {
    return(
      <div className="div-wrapper">
        <div className="div-logIn fadeIn">
          <h1>Log In</h1>
          <div className="div-form">
            <form method="POST" action="/api/auth/login">
            {/* <form> */}
              <div>
                <i className="fas fa-user inlineBlock"></i>
                {/* <input type="text" name="username" placeholder="Email" onChange={this.handleChange}/> */}
                <input type="text" name="username" placeholder="Email" />
              </div>
              <div>
                <i className="fas fa-unlock-alt"></i>
                {/* <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/> */}
                <input type="password" name="password" placeholder="Password" />

              </div>
              <div>
                {/* <input type="submit" value="Log In" id="button-Submit" onClick={this.handleSubmit}/> */}
                <input type="submit" value="Log In" id="button-Submit" />
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