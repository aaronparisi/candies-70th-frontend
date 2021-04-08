import React, { useState } from 'react'

const Inspo = props => {
  const [sex, setSex] = useState('female')
  const [inspoType, setInspoType] = useState('clothing')

  const sexCoverStyle = {
    left: (sex === 'female') ? '0px' : '50%'
  }
  const typeCoverStyle = {
    left: (inspoType === 'clothing') ? '0px' : '50%'
  }

  const ImageDisplay = () => {
    if (sex === 'male' && inspoType === 'clothing') {
      return (
        <div className="image-display">Male clothing!</div>
      )
    } else if (sex === 'male' && inspoType === 'hair') {
      return (
        <div className="image-display">Male hair!</div>
      )
    } else if (sex === 'female' && inspoType === 'clothing') {
      return (
        <div className="image-display">Female clothing!</div>
      )
    } else {
      return (
        <div className="image-display">Female hair!</div>
      )
    }
  }

  return (
    <div className="inspo">
      <h1 className="header" >Hair, Makeup, &amp; Outfit Inspiration!</h1>

      <div className="sliders">
        <div className="slider" id="sex-slider">
          <div className="slider-options">
            <div 
              className="slider-option"
              onClick={e => setSex('female')}
            >
              Female
            </div>
            <div 
              className="slider-option"
              onClick={e => setSex('male')}
            >
              Male
            </div>
          </div>
          <div 
            className="slider-cover"
            style={sexCoverStyle}
          >

          </div>
        </div>

        <div className="slider" id="type-slider">
          <div className="slider-options">
            <div 
              className="slider-option"
              onClick={e => setInspoType('clothing')}
            >
              Clothing
            </div>
            <div 
              className="slider-option"
              onClick={e => setInspoType('hair')}
            >
              Hair
            </div>
          </div>
          <div 
            className="slider-cover"
            style={typeCoverStyle}
          >
            
          </div>
        </div>
      </div>

      <ImageDisplay />
    </div>
  )
}

export default Inspo