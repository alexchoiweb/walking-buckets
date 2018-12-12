import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home Page</h1>
        <li><a href="/register">Sign Up</a></li>
        <li><a href="/login">Log In</a></li>
        <li><a href="/logout">Log Out</a></li>
        <li><a href="/secret">Secret</a></li>
        <li><a href="/input">Input</a></li>
      </div>
    )
  }
}

export default Home;