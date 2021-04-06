import React from 'react'
import ReactPlayer from 'react-player'

const HowTo = () => {

  return (
    <div className="how-to">
      <h1 className="header">Learn how to swing dance!</h1>

      <div className="videos">
        <ReactPlayer 
          url="https://www.youtube.com/embed/RoNw068t8n4?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fjckjones1008.wixsite.com&playsinline=1&enablejsapi=1&widgetid=3"
          className="video-container"
          height='280px'
          width='500px'
          />
        <ReactPlayer 
          url="https://www.youtube.com/embed/0l-IrUpWEUI?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fjckjones1008.wixsite.com&playsinline=1&enablejsapi=1&widgetid=1"
          className="video-container"
          height='280px'
          width='500px'
        />
      </div>
    </div>
  )
}

export default HowTo