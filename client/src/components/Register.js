import React, { Component } from 'react';

class Register extends Component {
  render() {
    return(
      <div>
        <h1>Register User</h1>
        <form method="post" action="/register">
          <div>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Username"/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password"/>
          </div>
          <div>
            <input type="submit" value="Sign Up!"/>
          </div>
        </form>

        <li><a href="/register">Sign Up</a></li>
        <li><a href="/login">Log In</a></li>
        <li><a href="/logout">Log Out</a></li>
      </div>
    )
  }
}

export default Register;