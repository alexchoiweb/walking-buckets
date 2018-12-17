import React, { Component } from 'react';

export default class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: ''
    };
  }

  // componentDidMount() {
  //   fetch('/api/secret')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.isLoggedIn) {
  //         this.setState({ isLoggedIn: true });
  //       } else {
  //         this.props.history.push('/login');
  //       }
  //     });
  // }

  componentDidMount() {
    fetch('/api/secret')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ isLoggedIn: res.isLoggedIn })
      });
  }

  render() {
    return (
      <div>
        <h1>Secret Page</h1>
        <li><a href="/register">Sign Up</a></li>
        <li><a href="/login">Log In</a></li>
        <li><a href="/logout">Log Out</a></li>
        <li><a href="/">Input</a></li>
        {this.state.isLoggedIn}
      </div>
    );
  }
}