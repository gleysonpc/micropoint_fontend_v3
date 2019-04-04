import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';


//Css
import './assets/css/black-dashboard-react.css';
import './assets/css/nucleo-icons.css';
import './assets/css/demo.css';

//Pages
import Admin from './Admin';
import Login from './auth/Login';
import Register from './register/Register';

const Check = props => {
    if (props.isAuthenticated) {
      return (<Admin {...props} />);
    } else {
      return (<Login/>);
    }
  }
  
class App extends Component {
  render() {        
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/admin'} render={props => <Check isAuthenticated={this.props.isAuthenticated} {...props}   />} />
          <Route path={'/register'} component={Register} />
          <Redirect from='/' to='/admin/dashboard' />
        </Switch>
      </BrowserRouter>
    );
  }
}

const MapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(MapStateToProps,null)(App);
