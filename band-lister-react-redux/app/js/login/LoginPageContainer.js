import { connect } from 'react-redux'
import LoginPage from './LoginPage'

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({})

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginPageContainer
