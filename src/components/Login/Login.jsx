import React, { useState } from 'react'
import { history } from '../..'

const Login = props => {
  const [email, setEmail] = useState('parisi.aaron@gmail.com')
  const [passcode, setPasscode] = useState('12345')

  const handleSubmit = e => {
    e.preventDefault()

    // todo this should eventually make an api call
    props.receiveCurrentUser({
      email: email
    })

    history.push('/')
  }

  const handleFormClose = e => {
    e.preventDefault()

    let newUrl = window.location.pathname.split('/')
    newUrl.pop();

    history.push(newUrl.join('/'))
  }

  return (
    <div className="login-content">
      <div className="login-overlay">
        <button 
          className="close-login-button"
          onClick={e => handleFormClose(e)}
        >
          X
        </button>

        <div className="login-form-height-wrapper">
          <div className="login-form">
            <form
              onSubmit={handleSubmit}
            >
              <input 
                type="text" 
                name="email" 
                id="email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                placeholder="Email"
              />

              <input 
                type="password" 
                name="passcode" 
                id="passcode"
                value={passcode}
                onChange={e => setPasscode(e.currentTarget.value)}
                placeholder="Passcode"
              />

              <input type="submit" value="Login"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login