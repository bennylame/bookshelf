import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({onSubmit, buttonText = 'default string'}) => {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

LoginForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default LoginForm
