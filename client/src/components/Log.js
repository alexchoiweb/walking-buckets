import React, { Component } from 'react';

class Log extends Component {
  state = {
    deletedLog: '',
  }

  handleClick = this.handleClick.bind(this);
  togglePopUp = this.togglePopUp.bind(this);

  handleClick() {
    const logId = this.props.log._id;
    const element = document.getElementById(logId)
    const popUp = document.getElementById(logId+1)
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
      .then(res => popUp.classList.remove('button-delete'))
      .then(res => popUp.innerHTML='')
      .catch(err => console.log(err)) 
  }

  togglePopUp() {
    const popUp = document.getElementById(this.props.log._id+1)
    const logId2 = this.props.log._id+2
    if (popUp.innerHTML === '') {
      popUp.innerHTML = `<button id=${logId2}>
                                 DELETE LOG
                        </button>`;
      const button = document.getElementById(logId2)
      button.addEventListener('click', this.handleClick);
      button.classList.add('button-delete')
    } else {
      popUp.innerHTML = ''
    }
  }

  render () {
    return (
      <div className="div-logAndDelete">
        <div id={this.props.log._id}>
          <div className="div-date">
            { this.props.log.date && <span className="logDate">{this.props.log.date.slice(5,10)}</span>}
          </div>
          <div className="div-log" onClick={this.togglePopUp}>
            <div className="div-logText">
              <span className="logText">
                <span id="shotTypeText">{this.props.log.shotType}</span>
                <br></br>
                <span id="makesAttemptsText">{this.props.log.makes}/{this.props.log.attempts}</span>
              </span>
            </div>
            {/* {this.state.deletedId && <span>-deleted-</span>} */}
            <div className="div-logPercent">
              <span id="logPercent">{Math.round((this.props.log.makes/this.props.log.attempts)*1000)/10}</span><span id="percentSign">%</span>
            </div>

          </div>
        </div>
        <div className="div-popUp" id={this.props.log._id+1}>
              
        </div>
      </div>
    )
  }
}

export default Log;