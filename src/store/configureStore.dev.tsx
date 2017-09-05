import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux'
// import { persistState } from 'redux-devtools'
import { createEpicMiddleware } from 'redux-observable'
import reducer from '../reducers'
import epics from '../epics'
import { sayHello } from '../epics/hello'
// import DevTools from '../containers/DevTools'

declare const module, require
declare const window

const epicMiddleware = createEpicMiddleware(sayHello)

const enhancer = compose(
  applyMiddleware(epicMiddleware),
  // DevTools.instrument() as GenericStoreEnhancer,
  // persistState(
  //   window.location.href.match(
  //     /[?&]debug_session=([^&#]+)\b/
  //   )
  // ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

function configureStoreDev (initialState: any): any {
  const store = createStore(reducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default)
    })
  }
  return store
}

module.exports = configureStoreDev
