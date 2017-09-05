import * as React from 'react'
import {
  Route,
} from 'react-router-dom'
import Index from 'bundle-loader?lazy!./Index'
import Page2 from 'bundle-loader?lazy!./Page2'
import AsyncRoute from '../components/AsyncRoute'

export default () => (
  <div>
    <Route path="/index" component={AsyncRoute(Index)} />
    <Route path="/page2" component={AsyncRoute(Page2)} />
  </div>
)
