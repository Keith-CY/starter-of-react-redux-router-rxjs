import * as React from 'react'

// export default () => <div>Page2</div>
export default class Page2 extends React.Component {
  constructor () {
    super ()
    console.log(this.props)
  }
  componentDidMount () {
    const ctx = this
    console.log(this.props)
    // setTimeout(() => {
    //   ctx.props.history.push('index')
    // }, 10000)
  }
  render () {
    return <div>page2</div>
  }
}
