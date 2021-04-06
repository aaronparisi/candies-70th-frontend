import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { debounce } from '../../utils/helpers'

const NavBar = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [darkNav, setDarkNav] = useState('false')
  const [visible, setVisible] = useState(true);

  const navBarStyles = {
    position: 'fixed',
    top: '25px',
    left: '0px',
    height: '75px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '9999',
    transition: 'top 0.3s'
  }

  const handleScroll = debounce(() => {
    const curScrollPos = window.pageYOffset

    setVisible(
      ((prevScrollPos > curScrollPos)) ||
      curScrollPos < 10
    )

    setDarkNav(
      curScrollPos >= 1070
    )

    setPrevScrollPos(curScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', e => handleScroll(e))

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <div 
      className="nav-bar-container"
      style={
        { ...navBarStyles, 
          top: visible ? '0px' : '-100px',
          backgroundColor: darkNav ? 'black' : 'transparent',
          boxShadow: darkNav ? '0px 1px 10px #CBA841' : 'none'
        }
      }
    >      
      <div
        className="nav-bar"
      >
        <div className="nav-link-container">
          <Link className="nav-link" to="#" >HOME</Link>
        </div>
        <div className="nav-link-container">
          <Link className="nav-link" to="#" >HAIR &amp; OUTFIT INSPO</Link>
        </div>
        <div className="nav-link-container">
          <Link className="nav-link" to="#" >PARKING</Link>
        </div>
        <div className="nav-link-container">
          <Link className="nav-link" to="#" >RSVP</Link>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavBar)