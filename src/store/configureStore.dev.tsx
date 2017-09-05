import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux'
import { persistState } from 'redux-devtools'
import reducer from '../reducers'
// import DevTools from '../containers/DevTools'

declare const module, require
declare const window

const enhancer = compose(
  // applyMiddleare(),
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
