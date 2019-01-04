import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <div className="wrapper-navbar">
        <div className="div-navbar">
          <div className="div-navbarGroupLeft">
            <a href='#features'>>Features</a>
            <a href='#pricing'>Pricing</a>
            <a href='#about'>About</a>
          </div>
          <div className="div-navbarGroupRight">
            <a href='/landing'>Login</a>
            <button>Try For Free</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;