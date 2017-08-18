import { connect } from 'react-redux'
import Header from './Header'

export const mapStateToProps = state => {
  let currentUser = {username: 'Guest'}
  if (state.currentUser && state.currentUser.username) {
    currentUser = state.currentUser
  }
  return {currentUser}
}

const HeaderContainer = connect(
  mapStateToProps,
  null
)(Header)

export default HeaderContainer
