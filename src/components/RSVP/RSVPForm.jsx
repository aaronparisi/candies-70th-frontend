import React from 'react'
import { history } from '../..'

const RSVPForm = props => {

  const handleFormClose = e => {
    e.preventDefault()

    history.push('/')
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('rsvp submission')
  }

  return (
    <div className="rsvp-container">
      <div className="rsvp-overlay"></div>

      <button 
        className="close-rsvp-button"
        onClick={e => handleFormClose(e)}
      >
        X
      </button>

      <div className="rsvp-form-container">
        Add Your Details!

        <form
          onSubmit={e => handleSubmit(e)}
        >
          <div className="going">
            <input type="radio" name="going" id="going-true" value="true" checked />
            <label htmlFor="going-true">Going</label>

            <input type="radio" name="going" id="going-false" value="false" />
            <label htmlFor="going-false">Not Going</label>
          </div>

          <input type="submit" value="RSVP"/>
        </form>
      </div>
      
    </div>
  )
}

export default RSVPForm