import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [darkNav, setDarkNav] = useState(false)
  const [visible, setVisible] = useState(true);

  const navBarStyles = {
    position: 'fixed',
    left: '0px',
    height: '75px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '9999',
    transition: 'top 0.3s',
    top: visible ? '0px' : '-100px',
    backgroundColor: darkNav ? 'black' : 'transparent',
    boxShadow: darkNav ? '0px 1px 10px #CBA841' : 'none'
  }

  useEffect(() => {
    let isScrolling;
    
    const handleScroll = e => {
      window.clearTimeout(isScrolling)
  
      isScrolling = setTimeout(() => {
        console.log('scrolling has stopped')
        adjustState();
      }, 200);
    }

    const adjustState = () => {
      console.log('adjusting state')
      const curScrollPos = window.pageYOffset
  
      setVisible(  // scrolling UP or at top
        (prevScrollPos > curScrollPos) ||
        curScrollPos < 10
      )
  
      if (prevScrollPos < curScrollPos) {  // scrolling down => nav will hide
        // wait before adjusting background
        setTimeout(() => {
          console.log('waited')
          setDarkNav(curScrollPos >= 1070)
        }, 500);
      } else {  // scrolling up => nav will be shown
        // set dark nav right away
        console.log('did not wait')
        setDarkNav(curScrollPos >= 1070)
      }
  
      setPrevScrollPos(curScrollPos)
    }

    window.addEventListener('scroll', e => handleScroll(e))

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])

  return (
    <div 
      className="nav-bar-container"
      style={
        { ...navBarStyles }
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

// todos
// - color change is jumpy
// - maybe take the nav bar out of the container?
// - do paralax