import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const SessionLinks = props => {
  let to, text;
  if (props.user !== null) {
    to = "/"
    text = "LOGOUT"
  } else {
    to = "/login"
    text = "LOGIN"
  }

  return (
    <div className="session-links">
      <div className="nav-link-container">
        <Link to={to} className="nav-link" >{text}</Link>
      </div>
    </div>
  )
}

export default withRouter(SessionLinks)