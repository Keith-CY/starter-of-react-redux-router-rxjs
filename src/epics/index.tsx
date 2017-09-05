import { combineEpics } from 'redux-observable'
import * as helloEpic from './hello'

export default combineEpics(
  helloEpic,
)
