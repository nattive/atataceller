import { combineReducers } from 'redux'
import registerReducer from './registerReducer'

export default combineReducers({
    auth: registerReducer
})