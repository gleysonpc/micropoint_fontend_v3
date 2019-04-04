import { combineReducers } from 'redux';
import LoginReducer from './auth/LoginReducer';
import {reducer as toasterReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
    auth: LoginReducer,
    toastr: toasterReducer
});

export default rootReducer;