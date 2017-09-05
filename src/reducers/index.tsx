import { combineReducers } from 'redux'
import helloReducer from './hello'

export default combineReducers({
  hello: helloReducer,
})
