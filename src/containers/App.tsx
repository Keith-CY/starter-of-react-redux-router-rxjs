import * as React from 'react'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './Header'
import Body from './body'
import Footer from './footer'
// import DevTools from './DevTools'
const configureStore = require('../store')

const store = configureStore()

// {process.env.NODE_ENV !== 'production' && <DevTools />}

export default class extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route path="/" component={Header} />
            <Route path="/" component={Body} />
            <Route path="/" component={Footer} />
          </div>
        </Provider>
      </Router>
    )
  }
}
