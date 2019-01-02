import React, { Component } from 'react';

import './Landing.css';

import Navbar from './Navbar';

class Landing extends Component {  
  render() {
    return (
      <div className="wrapper-landing">
        <Navbar />
        <div className="div-one">
          <div className="div-header">
            <div className="div-headerText">
              <span id="headerText">Want To Become a<br/>Walking Bucket?</span>
              <span id="headerText2">Visually track your training progress<br/>with our basketball shot journal.</span>
              <button id="button-headerButton">Start my 30-day Free Trial</button>
            </div>
            <div className="div-headerImage">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;