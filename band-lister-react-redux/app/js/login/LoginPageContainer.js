import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { loginThenDispatch } from '../actions'

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({
  login: (username, password) => loginThenDispatch(dispatch, username, password)
})

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginPageContainer
