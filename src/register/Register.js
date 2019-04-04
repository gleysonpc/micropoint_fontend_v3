import React, { Component } from 'react';
import '../assets/css/login.css';

import RegisterForm from './FormRegister';


class Register extends Component {

    render() {
        return (
            <>
                <div className='container'>                 
                    <RegisterForm history={this.props.history}  />
                </div>
            </>
        );
    }
}


export default Register;
