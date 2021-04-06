import React from 'react'
import ReactPlayer from 'react-player'
import FredAstaire from '../../videos/main-video.mp4'

const MainVideo = props => {

  return (
    <React.Fragment >
      <ReactPlayer
        id="main-video"
        width='100%'
        height=''
        url={FredAstaire}
        playing={true}
        loop={true}
        volume={0}
        muted={true}
      />

      <h1 className="header" id="main-header">Candie's Swingin' 70th!</h1>
    </React.Fragment>
  )
}

export default MainVideo