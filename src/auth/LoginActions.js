import axios from 'axios';
import {toastr} from 'react-redux-toastr';


const baseUrl = 'http://127.0.0.1:8000/api';

export async function login(email, password) {
    const data = {
        email: email,
        password: password
    };

    return dispatch => {
        dispatch(startRequest());

        axios.post(`${baseUrl}/login`,data)
        .then( res => {
            dispatch(successLogin(res));   
            toastr.success('Bem vindo', res.data.name);
                    
        })
        .catch(
            error => {
                toastr.error('Falha', 'Usuário ou senha incorreto!');
                dispatch(errorLogin(error.request));
            }
        );        
    }
}

export async function signUp(name, email, password, c_password, redirect) {
    const data = {
        name: name,
        email: email,
        password: password,
        c_password: c_password,
        
    };

    return (dispatch) => {
        dispatch(startRequest());

        axios.post(`${baseUrl}/register`,data)
        .then( res => {
            dispatch(successLogin(res))            
            dispatch(redirect)
            toastr.success('Bem vindo', 'Registro realizado com sucesso!');     
        })
        .catch(
            error => {
                const msg = JSON.parse(error.request.responseText).error;
                toastr.error('Falha', `${msg}`);
                dispatch(errorRegister(error.request))                
            }
        );        
    }  
   
}

function successLogin(data){
    return{
        type:'LOGIN_AUTHENTICATED',
        payload: data
    }
}

function errorLogin(data){
    return{
        type:'LOGIN_ERROR',
        payload:data
    }
}

function errorRegister(data){
    return{
        type:'REGISTER_ERROR',
        payload:data
    }
}

export function startRequest() {
    return {
        type: 'LOGIN_LOADING'
    }
}

export function doneRequest() {
    return {
        type: 'LOGIN_DONE'
    }
}
export function logout() {
    return {
        type: 'LOGIN_LOGOUT'
    }
}