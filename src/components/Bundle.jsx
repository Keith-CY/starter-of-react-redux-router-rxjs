import React, { Component } from 'react'

export default class Bundle extends Component {
  constructor () {
    super()
    this.state = {
      mod: null,
    }
  }
  componentWillMount () {
    this.load(this.props)
  }
  componentWillReceiveProps (nexProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nexProps)
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
