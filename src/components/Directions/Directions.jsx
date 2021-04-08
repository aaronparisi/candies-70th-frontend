import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import LittleCandie from '../../images/little-candie.png'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const Directions = props => {
  const curUser = props.location.pathname.split('/')[1]

  const mapStyle = {
    height: '500px',
    width: '500px'
  }

  return (
    <div className="directions" data-dark={true} >
      <h2>Saturday, October 2, 2021 @ 5pm PDT</h2>
      <h2 id="parking-directive">*** See parking info below ***</h2>

      <h1 className="header">Candie's Swingin' 70th Birthday</h1>

      <p>
        Join us for an unforgettable evening celebrating Candie's life! 
        Dress in your best 40s inspired outfits and come ready to dance the night away.
      </p>

      <button>RSVP</button>

      <img src={LittleCandie} alt="A pre-trauma Candie"/>

      <h2>Time &amp; Location</h2>
      <p>Saturday, October 2, 2021 @ 5pm PDT</p>
      <p>Jones House - 123 Fake Street, Unreal, CA 90210, USA</p>
      <h2 id="parking-directive">*** See parking info below ***</h2>

      <h2>About the Event</h2>
      <p>
        You are cordially invited to dance the night away at Candie's Swingin' 70th Birthday Party! 
        Please come dressed in your finest 40s-inspired outfits (costumes required!) 
        and ready to have fun!  <Link to={`/${curUser}/inspo`}>Click here for outfit &amp; hair inspiration.</Link> Cocktail 
        Hour is from 5:00 PM - 6:00 PM and dinner will start promptly at 6:00 PM. 
        <em>Adults only, please.</em>
      </p>

      <h2 className="parking-info-header">Parking Info</h2>

      <p>
        There is no parking on our cul-de-sac, 
        so please park anywhere South of it. 
        We will have balloons marking the point in the fence that you can enter 
        through to get to the front of our house. 
      </p>

      <button>RSVP</button>

      <div className="map">
        <Map
          google={props.google}
          zoom={10}
          initialCenter={{
            lat: 35.5496939,
            lng: -120.7060049,
          }}
          style={mapStyle}
        />
      </div>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC5pDwqjpxSaWgXPf-tWGBqhMNjbbrQxFY')
})(withRouter(Directions))