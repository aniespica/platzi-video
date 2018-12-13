import React from 'react'
import Play from '../../icons/play'
import Pause from '../../icons/pause'
import './play-pause.css'
export default function PlayPause(props) {
  return (
    <div className="PlayPause">
      {
        props.pause 
        ? <button onClick={props.handleClick}>
            <Play size={25} color="white"/>
          </button>
        : <button onClick={props.handleClick}>
            <Pause size={25} color="white"/>
          </button>
      }
    </div>
  )
}