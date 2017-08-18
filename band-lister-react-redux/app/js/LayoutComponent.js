import React from 'react'
import HeaderContainer from './HeaderContainer'

export default class LayoutComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        {this.props.children}
      </div>
    )
  }
}
