import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>🎸BandLister🥁</h1>
        <div>Current User: {this.props.currentUser.username}</div>
      </div>
    )
  }
}

Header.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
}
