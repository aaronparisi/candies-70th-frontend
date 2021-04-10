import React, { useState } from 'react'
import { history } from '../..'

const QuestionForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert("I'm working on the back end for this - check back later for fully functioning form submission and inbox party updates!!")
    history.push(window.location.pathname) 
  }

  return (
    <div 
      className="question-form"
      data-dark={true}
    >
      <h2>For any questions, please contact Candie @ 123-555-1234</h2>
      <h2>Or, send her a message!</h2>

      <form
        onSubmit={e => handleSubmit(e)}
      >
        <div className="row-one">
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            onFocus={e => e.currentTarget.classList.add('selected-input')}
            onBlur={e => e.currentTarget.classList.remove('selected-input')}
            onMouseEnter={e => e.currentTarget.classList.add('hovered-input')}
            onMouseLeave={e => e.currentTarget.classList.remove('hovered-input')}
            />
          <input
            type="email" 
            name="email" 
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            onFocus={e => e.currentTarget.classList.add('selected-input')}
            onBlur={e => e.currentTarget.classList.remove('selected-input')}
            onMouseEnter={e => e.currentTarget.classList.add('hovered-input')}
            onMouseLeave={e => e.currentTarget.classList.remove('hovered-input')}
          />
        </div>
        <input 
          type="tel" 
          name="phone" 
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.currentTarget.value)}
          onFocus={e => e.currentTarget.classList.add('selected-input')}
          onBlur={e => e.currentTarget.classList.remove('selected-input')}
          onMouseEnter={e => e.currentTarget.classList.add('hovered-input')}
          onMouseLeave={e => e.currentTarget.classList.remove('hovered-input')}
        />
        <textarea 
          name="message" 
          id="message" 
          cols="20" 
          rows="10"
          placeholder="Type your message here..."
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
          onFocus={e => e.currentTarget.classList.add('selected-input')}
          onBlur={e => e.currentTarget.classList.remove('selected-input')}
          onMouseEnter={e => e.currentTarget.classList.add('hovered-input')}
          onMouseLeave={e => e.currentTarget.classList.remove('hovered-input')}
        >
        </textarea>

        <input type="submit" value="Send message!"/>
      </form>

      <h2>Kindly RSVP by September 10, 2021</h2>
    </div>
  )
}

export default QuestionForm