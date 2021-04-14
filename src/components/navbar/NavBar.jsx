import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { debounce } from '../../utils/helpers';
import SessionLinks from './SessionLinks';

const inFrontOfDark = () => {
  const ele = document.elementFromPoint(0,75)
  
  if (ele.dataset.dark === undefined) {
    return true
  } else {
    return ele.dataset.dark === "true"
  }
}

const NavBar = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [darkNav, setDarkNav] = useState(inFrontOfDark())
  const [visible, setVisible] = useState(true);

  const navBarStyles = {
    position: 'fixed',
    left: '0px',
    height: '75px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '2',
    transition: 'top 0.3s',
    top: visible ? '0px' : '-100px',
    backgroundColor: darkNav ? 'black' : 'transparent',
    boxShadow: darkNav ? '0px 1px 10px #CBA841' : 'none'
  }

  useEffect(() => {
    return () => setDarkNav(inFrontOfDark())
  }, [props])
  
  useEffect(() => {
    let isScrolling;

    const handleScroll = debounce(() => {
      window.clearTimeout(isScrolling)

      isScrolling = setTimeout(() => {
        adjustState();
      }, 100);
    }, 250)

    const adjustState = () => {
      const curScrollPos = window.pageYOffset
  
      setVisible(  // scrolling UP or at top
        (prevScrollPos > curScrollPos) ||
        curScrollPos < 10
      )

      if (prevScrollPos < curScrollPos) {
        // scrolling down => nav will hide => wait before adjusting background
        setTimeout(() => {
          setDarkNav(inFrontOfDark())
        }, 2000);
      } else {
        // scrolling up => nav will show => set dark nav right away
        setDarkNav(inFrontOfDark())
      }
  
      setPrevScrollPos(curScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])

  const curUser = props.location.pathname.split('/')[1]
  
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
        <div 
          className="nav-link-container"
          id={ new RegExp(/\//).test(props.location.pathname) ? "selected-nav-link" : ""}
        >
          <Link className="nav-link" to={`/`} >HOME</Link>
        </div>
        <div 
          className="nav-link-container"
          id={ new RegExp(/inspo/).test(props.location.pathname) ? "selected-nav-link" : ""}
        >
          <Link className="nav-link" to={`/inspo`} >HAIR &amp; OUTFIT INSPO</Link>
        </div>
        <div 
          className="nav-link-container"
          id={ new RegExp(/directions/).test(props.location.pathname) ? "selected-nav-link" : ""}
        >
          <Link className="nav-link" to={`/directions`} >DIRECTIONS</Link>
        </div>
        <div 
          className="nav-link-container"
          id={ new RegExp("/(inspo|directions)?/rsvp/").test(props.location.pathname) ? "selected-nav-link" : ""}
        >
          <Link className="nav-link" to={`${props.location.pathname}/rsvp`} >RSVP</Link>
        </div>
      </div>

      <SessionLinks user={props.user} pathname={props.location.pathname} />
    </div>
  )
}

export default withRouter(NavBar)

// todos
// - maybe take the nav bar out of the container?
// - do paralax