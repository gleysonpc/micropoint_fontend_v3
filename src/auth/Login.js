import React, { Component } from 'react';
import {
    Button,
    Input,
    Form,
    Spinner
} from 'reactstrap';
import '../assets/css/login.css';
import NotificationAlert from 'react-notification-alert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, doneRequest, startRequest } from './LoginActions';
import {Link} from 'react-router-dom';

var options = {};
options = {
    place: 'tr',
    message: (
        <div>
            <div>
                Falha <b>Usuário ou senha incorreto!</b> - Verifique seus dados e tente novamente.
            </div>
        </div>
    ),
    type: "danger",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 3
}

class Login extends Component {
    state = {
        email: 'gleyson_10@hotmail.com',
        password: '123',
    };

    accessDenied = () => {       
        this.refs.notify.notificationAlert(options);
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
                    <NotificationAlert ref="notify" />
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
                                        <Button className="btn btn-link px-0" 
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
    isLoading: state.login.isLoading,
    isAuthenticated: state.login.isAuthenticated,
    user: state.login.user
});

const MapDispatchToProps = dispatch => bindActionCreators({
    login,
    startRequest,
    doneRequest
}, dispatch);

export default connect(MapStateToProps, MapDispatchToProps)(Login);