import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

// const enhancer = applyMiddleware(...middlewares)

function configureStoreProd (initialState) {
  return createStore(reducer, initialState)
}

module.exports = configureStoreProd
