import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return(
      <div>
        <h1>Log In </h1>
        <form method="post" action="/login">
          <div>
            <label>Username:</label>
            <input type="text" name="username"/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password"/>
          </div>
          <div>
            <input type="submit" value="Log In"/>
          </div>
        </form>

        <li><a href="/register">Sign Up</a></li>
        <li><a href="/logout">Log Out</a></li>
        <li><a href="/secret">Secret</a></li>
        <li><a href="/">Input</a></li>
      </div>
    )
  }
}

export default LogIn;