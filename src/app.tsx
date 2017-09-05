import * as React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

render(
  <App />,
  document.getElementById('app') as HTMLElement,
)

declare const module

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default
    render(
      <App />,
      document.getElementById('app') as HTMLElement
    )
  })
}
