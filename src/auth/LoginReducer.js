const initial_state = {
    user: {},
    isAuthenticated: false,
    isLoading: false
};

export default (state = initial_state, action) => {
    switch (action.type) {

        case 'LOGIN_AUTHENTICATED':                    
            return { ...state, user: action.payload.data, isAuthenticated: true, isLoading: false } 

        case 'LOGIN_LOADING':        
            return { ...state, isLoading: true }

        case 'LOGIN_DONE':            
            return { ...state, isLoading: false }

        case 'LOGIN_ERROR': 
        return {...state, isLoading: false, isAuthenticated:false}

        case 'REGISTER_ERROR': 
        return {...state, isLoading: false, isAuthenticated:false}

        case 'LOGIN_LOGOUT':
        return {...state, isAuthenticated:false, user:{}}

        default:
            return state;
    }
}