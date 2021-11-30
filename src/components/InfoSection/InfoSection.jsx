import React from 'react'

const InfoSection = props => {
  return (
    <div 
      className="info-section" 
      data-dark={true}
    >
      <h1 className="header" id="info-header">Candie's Swingin' 70th!</h1>
      <p className="tagline">Join us for an unforgettable evening celebrating Candie's life! Dress in your best 40s inspired outfits and come ready to dance the night away.</p>

      <div className="logistics">
        <div className="info-container" id="when-container">
          <h2 className="info-header">When</h2>
          <div className="info-content" id="when-content">
            <p>October 2, 2021</p>
            <p>5pm PDT</p>
          </div>
        </div>

        <div className="info-container" id="where-container">
          <h2 className="info-header">Where</h2>
          <div className="info-content" id="where-content">
            <p>Candie's House (see parking info below!)</p>
            <p>123 Fake Street, Unreal, CA 90210, USA</p>
          </div>
        </div>
      </div>

      <div className="rsvp-link-info">
        <h2 className="rsvp-text">Find Parking, Details, and RSVP below!!</h2>

        <button>CLICK HERE</button>
      </div>
    </div>
  )
}

export default InfoSection