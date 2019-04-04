import React, { Component } from 'react';
import {
    Button,
    Input,
    Form,
    Spinner
} from 'reactstrap';
import '../assets/css/login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, doneRequest, startRequest } from './LoginActions';
import {Link} from 'react-router-dom';
import {toastr} from 'react-redux-toastr';


class Login extends Component {
    state = {
        email: 'gleyson_10@hotmail.com',
        password: '123456',
    };

    accessDenied = () => {       
        toastr.info('The title', 'The message');
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };


    handleChangeText = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    render() {
        return (
            <>
                <div className='container'>                    
                    <Form className='box' onSubmit={(e) => this.handleLoginSubmit(e)}>
                        <div className="card p-4">
                            <div className="card-body">
                                <h1>Login</h1>                 
                                <p className="text-muted">Acesso ao Sistema</p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-user-run fixicon"></i>
                                        </span>
                                    </div>
                                    <Input className="form-control" name={'email'} type="email" placeholder="Email" disabled={this.props.isLoading}
                                        onChange={value => this.handleChangeText(value)} value={this.state.email} required />
                                </div>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text form-control">
                                            <i className="tim-icons icon-sound-wave fixicon"></i>
                                        </span>
                                    </div>
                                    <Input className="form-control" name={'password'} type="password" placeholder="Senha" disabled={this.props.isLoading}
                                        onChange={value => this.handleChangeText(value)} value={this.state.password} required />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Button className="btn btn-info px-4" type="submit" disabled={this.props.isLoading} >Entrar</Button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Button className="btn btn-link px-0" onClick={() =>this.accessDenied()}
                                         type="button">Esqueceu sua senha?</Button>
                                    </div>
                                </div>
                                <div className="text-block text-center my-3">
                                    <span className="text-small font-weight-semibold">Não tem cadastro ?</span>
                                    <Link to='/register' className='text-black text-small'> clique aqui para Registrar</Link>
                                </div>
                            </div>
                            { this.props.isLoading ? <div className='spinner'><Spinner color='info'/></div> : null}
                        </div>
                    </Form>
                </div>
            </>
        );
    }
}

const MapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

const MapDispatchToProps = dispatch => bindActionCreators({
    login,
    startRequest,
    doneRequest
}, dispatch);

export default connect(MapStateToProps, MapDispatchToProps)(Login);