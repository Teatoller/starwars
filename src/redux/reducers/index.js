import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import characterIdReducer from './characterIdReducer';
import characterProfileReducer from './characterProfileReducer'

export default combineReducers({
    characterReducer,
    characterIdReducer,
    characterProfileReducer,
})
