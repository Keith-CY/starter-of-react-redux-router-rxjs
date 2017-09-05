import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from './Header'
import Body from './body'
import Footer from './footer'
import reducer from '../reducers'

const store = createStore(reducer)

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
