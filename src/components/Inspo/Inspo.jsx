import React, { useState } from 'react'
import ImageDisplay from './ImageDisplay'

// todo - maybe put photos in s3 bucket?
import MaleClothing1 from '../../images/maleInspo/clothing/male-clothing-1.png'
import MaleClothing2 from '../../images/maleInspo/clothing/male-clothing-2.png'
import MaleClothing3 from '../../images/maleInspo/clothing/male-clothing-3.png'
import MaleClothing4 from '../../images/maleInspo/clothing/male-clothing-4.png'
import MaleClothing5 from '../../images/maleInspo/clothing/male-clothing-5.png'
import MaleClothing6 from '../../images/maleInspo/clothing/male-clothing-6.png'
import MaleClothing7 from '../../images/maleInspo/clothing/male-clothing-7.png'
import MaleClothing8 from '../../images/maleInspo/clothing/male-clothing-8.png'

import FemaleClothing1 from '../../images/femaleInspo/clothing/female-clothing-1.png'
import FemaleClothing2 from '../../images/femaleInspo/clothing/female-clothing-2.png'
import FemaleClothing3 from '../../images/femaleInspo/clothing/female-clothing-3.png'
import FemaleClothing4 from '../../images/femaleInspo/clothing/female-clothing-4.png'
import FemaleClothing5 from '../../images/femaleInspo/clothing/female-clothing-5.png'
import FemaleClothing6 from '../../images/femaleInspo/clothing/female-clothing-6.png'
import FemaleClothing7 from '../../images/femaleInspo/clothing/female-clothing-7.png'
import FemaleClothing8 from '../../images/femaleInspo/clothing/female-clothing-8.png'
import FemaleClothing9 from '../../images/femaleInspo/clothing/female-clothing-9.png'

import MaleHair1 from '../../images/maleInspo/hair/male-hair-1.png'
import MaleHair2 from '../../images/maleInspo/hair/male-hair-2.png'
import MaleHair3 from '../../images/maleInspo/hair/male-hair-3.png'

import FemaleHair1 from '../../images/femaleInspo/hair/female-hair-1.png'
import FemaleHair2 from '../../images/femaleInspo/hair/female-hair-2.png'
import FemaleHair3 from '../../images/femaleInspo/hair/female-hair-3.png'

const maleClothing = [
  MaleClothing1,
  MaleClothing2,
  MaleClothing3,
  MaleClothing4,
  MaleClothing5,
  MaleClothing6,
  MaleClothing7,
  MaleClothing8
]

const maleHair = [
  MaleHair1,
  MaleHair2,
  MaleHair3
]

const femaleClothing = [
  FemaleClothing1,
  FemaleClothing2,
  FemaleClothing3,
  FemaleClothing4,
  FemaleClothing5,
  FemaleClothing6,
  FemaleClothing7,
  FemaleClothing8,
  FemaleClothing9
]

const femaleHair = [
  FemaleHair1,
  FemaleHair2,
  FemaleHair3
]

const Inspo = props => {
  const [sex, setSex] = useState('female')
  const [inspoType, setInspoType] = useState('clothing')

  const sexCoverStyle = {
    left: (sex === 'female') ? '0px' : '50%'
  }
  const typeCoverStyle = {
    left: (inspoType === 'clothing') ? '0px' : '50%'
  }

  const ImagePicker = () => {
    if (sex === 'male' && inspoType === 'clothing') {
      return (
        <ImageDisplay images={maleClothing} />
      )
    } else if (sex === 'male' && inspoType === 'hair') {
      return (
        <ImageDisplay images={maleHair} />
      )
    } else if (sex === 'female' && inspoType === 'clothing') {
      return (
        <ImageDisplay images={femaleClothing} />
      )
    } else {
      return (
        <ImageDisplay images={femaleHair} />
      )
    }
  }

  return (
    <div 
      className="inspo"
      data-dark={true}
    >
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

      <ImagePicker />
    </div>
  )
}

export default Inspo