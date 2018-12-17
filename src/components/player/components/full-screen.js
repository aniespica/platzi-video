import React from 'react'
import FullScreenIcon from '../../icons/components/full-screen'
import './full-screen.css'
export default function FullScreen(prosp) {
  return(
    <div className="FullScreen" onClick={prosp.handleFullScreenClick}>
      <FullScreenIcon
        size={25}
        color="white"
      />
    </div>
  )
}