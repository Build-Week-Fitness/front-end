import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { classesReducer } from './classesReducer';

export default combineReducers({
    loginReducer,
    classesReducer,
});
