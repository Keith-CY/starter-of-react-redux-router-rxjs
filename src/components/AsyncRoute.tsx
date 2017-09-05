// import React, { Component } from 'react'
import * as React from 'react'

interface PassedProps extends React.Props<any> {
  load: any;
  children: any;
}

class Bundle extends React.Component<PassedProps, any> {
  constructor () {
    super()
    this.state = {
      mod: null,
    }
  }
  componentWillMount () {
    this.load(this.props)
  }
  componentWillReceiveProps (nextProps: {load: any}) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  load (props) {
    this.setState({
      mod: null,
    })
    props.load((mod) => {
      this.setState({
        mod: mod.default || mod,
      })
    })
  }
  render () {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

export default module => routerProps => (<Bundle load={module}>
  {Comp => (Comp ? <Comp {...routerProps} /> : null)}
</Bundle>)
