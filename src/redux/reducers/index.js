import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import characterIdReducer from './characterIdReducer'

export default combineReducers({
    characterReducer,
    characterIdReducer,
})
