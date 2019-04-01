import axios from 'axios';

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
            dispatch(successLogin(res))
        })
        .catch(
            error => {
                dispatch(errorLogin(error.request))
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