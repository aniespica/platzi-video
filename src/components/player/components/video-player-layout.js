import React from 'react'
import './video-player-layout.css'
const VideoPlayerLayot = (props) => (
  <div className="VideoPlayer" ref={props.setRef}>
    {props.children}
  </div>
)
export default VideoPlayerLayot