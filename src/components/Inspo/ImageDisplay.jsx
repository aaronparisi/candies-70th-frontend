import React from 'react'

const ImageDisplay = ({ images }) => {
  
  return (
    <div className="image-display">
      {
        images.map(element => {
          return <img src={element} alt={element} />
        })
      }
    </div>
  )
}

export default ImageDisplay