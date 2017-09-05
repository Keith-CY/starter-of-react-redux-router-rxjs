import * as React from 'react'
import connect from '../utils/connect'
import { goTo } from '../utils/nav'

interface PassedProps extends React.Props<any> {
  sayHello: any;
}

class Header extends React.Component<PassedProps, any> {
  protected goTo = goTo.bind(this)
  constructor () {
    super()
    this.state = {
      navs: [
        { label: '首页', url: 'index' },
        { label: '第二页', url: 'page2' },
        { label: '第三页', url: 'page3' },
      ]
    }
  }
  componentDidMount () {
    this.props.sayHello('test')
  }
  render () {
    const { navs } = this.state
    return (
      <div>
        {navs.map((nav: {label: string, url: string}) => <span
          key={nav.url}
          onClick={this.goTo(nav.url)}
          >{nav.label}</span>)}
      </div>
    )
  }
}


export default connect(Header)
