import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import noteReducer from './noteReducer';

export default combineReducers({
    errors:errorReducer,
    note:noteReducer
});