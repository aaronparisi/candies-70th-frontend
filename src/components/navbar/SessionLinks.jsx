import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { history } from '../..';

const SessionLinks = props => {

  const handleLogout = e => {
    e.preventDefault()
    props.logoutCurrentUser()
    history.push('/')
  }

  if (props.user !== null) {
    return (
      <React.Fragment >
        <div className="nav-link-container" id={ new RegExp(/\/directions$/).test(props.pathname) ? "selected-nav-link" : ""}>
          <Link to={'/directions'} className="nav-link" >DIRECTIONS</Link>
        </div>
        <div className="nav-link-container" id={ new RegExp(/\/portal$/).test(props.pathname) ? "selected-nav-link" : ""}>
          <Link to={`/portal`} className="nav-link" >PORTAL</Link>
        </div>
        <div className="nav-link-container" >
          <Link to={`${props.location.pathname}/rsvp`} className="nav-link" >RSVP</Link>
        </div>
        <div className="nav-link-container">
          {/* <Link to={'#'} className="nav-link" onClick={handleLogout} >LOGOUT</Link> */}
          <a href="" className="nav-link" onClick={handleLogout} >LOGOUT</a>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment >
        <div className="nav-link-container">
          <Link to="/login" className="nav-link" >LOGIN</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(SessionLinks)