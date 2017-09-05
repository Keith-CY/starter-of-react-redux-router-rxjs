import { handleActions } from 'redux-actions'
import actions from '../actions'

export default handleActions({
  [actions.sayHello.toString()]: (state, action) => {
    return { ...state,  ...action.payload }
  }
}, {
  text: '',
})
