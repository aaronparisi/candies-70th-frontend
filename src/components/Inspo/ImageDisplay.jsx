import React from 'react'

const ImageDisplay = ({ images }) => {
  
  return (
    <div className="image-display">
      {
        images.map((element, idx) => {
          return <img key={idx} src={element} alt={element} />
        })
      }
    </div>
  )
}

export default ImageDisplay