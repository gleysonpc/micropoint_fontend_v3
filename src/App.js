import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './assets/css/black-dashboard-react.css';
import './assets/css/nucleo-icons.css';
import './assets/css/demo.css';

import Admin from './Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/admin'} render={props => <Admin {...props} />} />
          <Redirect from='/' to='/admin/dashboard' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
