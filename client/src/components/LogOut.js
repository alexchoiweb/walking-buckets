import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/') }}
  >
    Back to Home!
  </button>
))

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutSuccess: false,
      messageAPI: ''
    };
  }

  componentDidMount() {
    fetch('/api/logout')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ logoutSuccess: true, messageAPI: res.message });
      })
      .then(() => this.props.history.push('/login'));
  }

  render() {
    return (
      <div>
        { this.state.logoutSuccess && (<div>Logout Success</div>) }
        <Button />
        <p>{`State visualizer: logoutSuccess: ${this.state.logoutSuccess}`}</p>
        <p>Message from the API: { this.state.messageAPI }</p>
      </div>
    );
  }
}