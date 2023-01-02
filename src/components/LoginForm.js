import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({onSubmit, buttonText = 'default string'}) => {
  return (
    <form onSubmit={onSubmit}>
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
