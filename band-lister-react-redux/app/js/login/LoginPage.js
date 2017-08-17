import React from 'react'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm(event) {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  render () {
    return (
      <div>
        <h1 className='title'>login page</h1>
        <form onSubmit={this.submitForm}>
          <div className='username'>
            <label>username</label>
            <input name='username' value={this.state.username} onChange={this.handleInputChange}/>
          </div>
          <div className='password'>
            <label>password</label>
            <input name='password' type='password' value={this.state.password} onChange={this.handleInputChange}/>
          </div>
          <button className='submit' type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
