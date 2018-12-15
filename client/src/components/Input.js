import React, { Component } from 'react';

import '../styles/Input.css';

import ShotLog from './ShotLog';

class Input extends Component {
  state = {
    shotType: '',
    makes: 0,
    attempts: 0,
    shotLog: [
      {
        makes: 5,
        attempts: 10,
        date: "2018-12-16T07:20:42.658Z",
        shotType: 'Three'      
      },
      {
        makes: 56,
        attempts: 104,
        date: "2018-12-14T07:20:42.658Z",
        shotType: 'Three'      
      },
      // {
      //   makes: 99,
      //   attempts: 256,
      //   date: "2018-12-14T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
      // {
      //   makes: 5,
      //   attempts: 10,
      //   date: "2018-12-16T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
      // {
      //   makes: 56,
      //   attempts: 104,
      //   date: "2018-12-14T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
      // {
      //   makes: 99,
      //   attempts: 256,
      //   date: "2018-12-14T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
      // {
      //   makes: 5,
      //   attempts: 10,
      //   date: "2018-12-16T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
      // {
      //   makes: 56,
      //   attempts: 104,
      //   date: "2018-12-14T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
      // {
      //   makes: 99,
      //   attempts: 256,
      //   date: "2018-12-14T07:20:42.658Z",
      //   shotType: 'Three'      
      // },
    ],
    userId: '',
    username: 'alexthechoi@gmail.com'
  }

  handleChange = this.handleChange.bind(this);
  addNewLog = this.addNewLog.bind(this);
  
  componentDidMount() {
    fetch('/api/userId')
      .then(res => res.json())
      .then(res => this.setState({ 
        userId: res.userId,
        username: res.username
      }))
      .catch(error => console.log(error))
    
    fetch('/api/logs')
      .then(res => res.json())
      .then(data => this.setState({ shotLog: data }))
      .catch(error => console.log(error))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewLog(event) {
    event.preventDefault();
    if (this.state.shotType === '') {
      return alert('Please select a shot type.');
    } else if (this.state.attempts < 1) {
      return alert('You need more than 0 attempts');
    } else if (this.state.makes > this.state.attempts) {
      return alert(`You can't have more makes than attempts. Unless you're Kobe.`);
    }

    let shotLog = this.state.shotLog;
    let newLog = {
      userId: this.state.userId,
      makes: this.state.makes, 
      attempts: this.state.attempts,
      shotType: this.state.shotType
    }
    shotLog.push(newLog);

    fetch(`/api/logs/${this.state.userId}`, {  
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify({
        userId: this.state.userId,
        shotType: this.state.shotType,
        makes: this.state.makes,
        attempts: this.state.attempts
      }),
    });

    this.setState({ makes: 0, attempts: 0, shotLog: shotLog });
    document.getElementById('select').options[0].selected=true;
    document.getElementById('makesButton').value = '';
    document.getElementById('attemptsButton').value = '';
  }

  render() {
    return(
      <div className="wrapper">
        <section className="one navBar">
            <div className="div-navButton" id="homeButton">
              <a href='/'><i className="fas fa-home icon"></i></a>
            </div>
          <div className="oneFlex">
            <div className="div-navButton">
              <i className="fas fa-chart-line icon"></i>
            </div>
            <div className="div-navButton">
              <i className="far fa-list-alt icon"></i>
            </div>
          </div>
        </section>
        <section className="two">
          <ShotLog 
            shotLog={ this.state.shotLog }
          />
        </section>
        <section className="three">
          <form method="POST" action="/api/items">
            <div className="div-select">
              <select id="select" name="shotType" onChange={ this.handleChange }>
                <option select="defaultValue">
                Shot Type
                </option>
                <option>Layup</option>
                <option>Midrange</option>
                <option>Three</option>
              </select>
            </div>
            <div className="div-makesAttempts">
              <input id="makesButton"
                     type="number"
                     placeholder="Makes"
                     name="makes"
                     onChange={ this.handleChange }>
              </input>
              <input id="attemptsButton"
                     type="number"
                     placeholder="Attempts"
                     name="attempts"
                     onChange={ this.handleChange }>
              </input>
              <button onClick={ this.addNewLog }>Log</button>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default Input;