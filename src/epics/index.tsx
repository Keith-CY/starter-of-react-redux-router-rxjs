import { combineEpics } from 'redux-observable'
import { sayHello } from './hello'

export default combineEpics(
  sayHello,
)
