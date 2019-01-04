import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
  state = {
    hi: 'hello',
    shotLog: [],
    userId: '',
    username: '',
  }

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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;