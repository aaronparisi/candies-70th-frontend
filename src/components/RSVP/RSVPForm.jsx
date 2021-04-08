import React, { useState } from 'react'
import { history } from '../..'

const RSVPForm = props => {
  const [going, setGoing] = useState(true)
  const [plusOne, setPlusOne] = useState(false)
  const [plusOneFirstname, setPlusOneFirstname] = useState('')
  const [plusOneLastname, setPlusOneLastname] = useState('')

  const plusOneStyle = {
    display: (plusOne) ? 'block' : 'none'
  }
  const plusOneCheckboxStyle = {
    display: (going) ? 'block' : 'none'
  }

  const handleFormClose = e => {
    e.preventDefault()
    let newUrl = window.location.pathname.split('/')
    newUrl.pop();

    history.push(newUrl.join('/'))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('rsvp submission')
  }

  return (
    <div className="rsvp-content">
      <div className="rsvp-overlay"></div>

      <button 
        className="close-rsvp-button"
        onClick={e => handleFormClose(e)}
      >
        X
      </button>

      <div className="rsvp-form-height-wrapper">
        <div className="rsvp-form">        
          <div className="party-details">
            <h2>Candie's Swingin' 70th Birthday</h2>
            <p>October 2, 2021 @ 5pm PDT</p>
            <p>123 Fake Street, Unreal, CA 90210, USA</p>
          </div>
          <form
            onSubmit={e => handleSubmit(e)}
          >
            <div className="going">
              <div className="going-option">
                <input 
                  type="radio" 
                  name="going" 
                  id="going-true" 
                  value='true'
                  defaultChecked
                  onClick={e => setGoing(true)}
                />
                <label htmlFor="going-true">Going</label>
              </div>

              <div className="going-option">
                <input 
                  type="radio" 
                  name="going" 
                  id="going-false" 
                  value="false"
                  onClick={e => setGoing(false)}
                />
                <label htmlFor="going-false">Not Going</label>
              </div>
            </div>

            <div 
              className="plus-one-checkbox"
              style={plusOneCheckboxStyle}
            >
              <input 
                type="checkbox"
                name="" 
                id="plus-one-checkbox"
                onClick={e => setPlusOne(e.currentTarget.checked)}
              />
              <label htmlFor="plus-one-checkbox">I am bringing a plus one</label>
            </div>

            <div
              className="plus-one-fields"
              style={plusOneStyle}
            >
              <input
                type="text" 
                name="plus-one-firstname" 
                id="plus-one-firstname"
                value={plusOneFirstname}
                placeholder="First Name"
                onChange={e => setPlusOneFirstname(e.currentTarget.value)}
              />
              <input
                type="text" 
                name="plus-one-lastname" 
                id="plus-one-lastname"
                value={plusOneLastname}
                placeholder="Last Name"
                onChange={e => setPlusOneLastname(e.currentTarget.value)}
              />
            </div>

            <input type="submit" value="RSVP"/>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default RSVPForm