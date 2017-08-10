import React from 'react'

export default class LoginPage extends React.Component {
  submitForm(event) {
    console.log('submit')
  }

  render () {
    return (
      <div>
        <h1 className='title'>login page</h1>
        <form onSubmit={this.submitForm}>
          <label>username</label>
          <input/>
          <label>password</label>
          <input/>
          <button className='submit' type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
