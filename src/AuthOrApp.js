import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Pages
import Admin from './Admin';
import Login from './auth/Login';

const App = props => (
   <Admin />
);

const Auth = props => (
    <Auth />
);

class AuthOrApp extends Component {

    render(){
        return(

        );
    }

}

const MapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

export default connect(MapStateToProps, null)(AuthOrApp);