import { combineReducers } from 'redux';

import LoginReducer from '../src/auth/LoginReducer';

const rootReducer = combineReducers({
    login: LoginReducer,
});

export default rootReducer;