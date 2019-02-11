import {combineReducers} from 'redux';
import coinReducer from './cryptoReducer';

const rootReducer = combineReducers({
    coinReducer
});

export default rootReducer;