import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// import Home from './components/Home';

import Input from './components/Input';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import Register from './components/Register';
import Secret from './components/Secret';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/'   component = { Input } />

          <Route path='/login'    component = { LogIn } />
          <Route path='/logout'   component = { LogOut } />
          <Route path='/register' component = { Register } />
          <Route path='/secret'   component = { Secret } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;