// 🐨 you'll need to import react and createRoot from react-dom up here
import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'

import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from 'components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

const App = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showRegisterDialog, setShowRegisterDialog] = useState(false)

  const openLoginDialog = () => setShowLoginDialog(true)
  const closeLoginDialog = () => setShowLoginDialog(false)
  const openRegisterDialog = () => setShowRegisterDialog(true)
  const closeRegisterDialog = () => setShowRegisterDialog(false)

  const LoginDialog = () => {
    return (
      <Dialog aria-label="login modal">
        <button onClick={closeLoginDialog}>Close</button>
        <h3>Login Dialog</h3>
      </Dialog>
    )
  }

  const RegisterDialog = () => {
    return (
      <Dialog aria-label="register modal">
        <button onClick={closeRegisterDialog}>Close</button>
        <h3>Register Dialog</h3>
      </Dialog>
    )
  }

  return (
    <div>
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={openLoginDialog}>Login</button>
      </div>
      <div>
        <button onClick={openRegisterDialog}>Register</button>
      </div>

      {showLoginDialog ? <LoginDialog /> : null}
      {showRegisterDialog && <RegisterDialog />}
    </div>
  )
}

// 🐨 use createRoot to render the <App /> to the root element
const root = createRoot(document.getElementById('root'))
root.render(<App />)
// 💰 find the root element with: document.getElementById('root')
