import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../auth/LoginActions';

const RegisterForm = props => {
    
    const {
        errors,
        touched,
    } = props;

    return (
        <Form className='box'>          
            <div className="card p-4">
                <div className="card-body">
                    <h1>Registrar - se</h1>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="tim-icons icon-user-run fixicon"></i>
                            </span>
                        </div>
                        <Field className="form-control" name='name' type='text' placeholder='Nome' />
                    </div>
                    {touched.name && errors.name && <p className='text-danger'>{errors.name}</p>}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="tim-icons icon-user-run fixicon"></i>
                            </span>
                        </div>
                        <Field className='form-control' name='email' type='email' placeholder='Email' />

                    </div>
                    {touched.email && errors.email && <p className='text-danger'>{errors.email}</p>}
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text form-control">
                                <i className="tim-icons icon-sound-wave fixicon"></i>
                            </span>
                        </div>
                        <Field className="form-control" name={'password'} type="password" placeholder="Senha" />
                    </div>
                    {touched.password && errors.password && <p className='text-danger'>{errors.password}</p>}
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text form-control">
                                <i className="tim-icons icon-sound-wave fixicon"></i>
                            </span>
                        </div>
                        <Field className="form-control" name='c_password' type="password" placeholder="Confirmar Senha" />
                    </div>
                    {touched.c_password && errors.c_password && <p className='text-danger'>{errors.c_password}</p>}
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-info px-4" type="submit">Entrar</button>
                        </div>
                    </div>
                    <div className="text-block text-center my-3">
                        <span className="text-small font-weight-semibold">Já tem uma conta ?</span>
                        {<Link to='/admin' className="text-black text-small"> clique aqui para fazer login</Link>}
                    </div>
                </div>
                {props.isLoading ? <div className='spinner'><Spinner color='info' /></div> : null}
            </div>
        </Form>
    );

};

const FormikApp = withFormik({
    mapPropsToValues({ name, email, password, c_password }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            c_password: c_password || '',
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('informe seu nome'),
        email: Yup.string().email('Informe um email válido!').required('informe seu email'),
        password: Yup.string().min(6, 'a senha deve ter no mínimo 6 caracteres').required('informe uma senha'),
        c_password: Yup.string().min(6, 'a senha deve ter no mínimo 6 caracteres')
            .oneOf([Yup.ref('password'), null], 'as senhas não coincidem')
            .required('confirme sua senha')
    }),
    handleSubmit(values, {props}) {
        const redirect = () => props.history.push('/admin/dashboard')
        props.signUp(values.name, values.email, values.password, values.c_password, redirect)      

    }
})(RegisterForm);

const MapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
});

const MapDispatchToProps = dispatch => bindActionCreators({
    signUp,
}, dispatch);

export default connect(MapStateToProps, MapDispatchToProps)(FormikApp);