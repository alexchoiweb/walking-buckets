import React, { Component } from 'react';

class Log extends Component {
  state = {
    deletedLog: '',
  }

  handleClick = this.handleClick.bind(this);

  handleClick() {
    const logId = this.props.log._id;
    const element = document.getElementById(logId)
    fetch(`/api/logs/${logId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify({
        id: logId
      })
    })
      .then(res => res.text())
      .then(res => this.setState({ deletedId: logId }))
      .then(res => element.innerHTML='')
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <div className="div-date">
          <span className="logDate">{this.props.log.date.slice(5,10)}</span>
        </div>
        <div className="div-log">
          {this.state.deletedId && <span>-deleted-</span>}
          <span className="logText" id={this.props.log._id}>
            {this.props.log.makes}/{this.props.log.attempts} {this.props.log.shotType}
            
          </span>
          <span id="logPercent">{Math.round((this.props.log.makes/this.props.log.attempts)*1000)/10}%</span>
        </div>
        {/* <button onClick={ this.handleClick }>delete</button> */}
      </div>
    )
  }
}

export default Log;