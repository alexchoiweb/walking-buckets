import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className="one navBar">
      <div className="div-navButton" id="homeButton">
        {this.state.userId ?
          <div>
            <Link to="/logout"><i className="fas fa-home icon"></i></Link>
            <p id="span-logOut">Log Out</p>
          </div>
        :
          <div>
            <Link to="login"><i className="fas fa-home icon"></i></Link>
            <p id="span-logIn">Log In</p>
          </div>
        }        
      </div>            
      <div className="oneFlex">
        <div className="div-navButton">
          <i className="fas fa-chart-line icon icon-inactive" id="button-graph" onClick={this.toggleView}></i>
        </div>
        <div className="div-navButton">
          <i className="far fa-list-alt icon" id="button-list" onClick={this.toggleView}></i>
        </div>
      </div>
  </section>
  )
}