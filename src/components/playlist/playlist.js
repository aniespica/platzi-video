import React from 'react'
import Media from './media'
import './playlist.css'
export default function Playlist(props){
  return (
    <div className="Playlist">
      {
        props.playlist.map(item => <Media {...item} handleClick={props.handleOpenModal} key={item.id}/> )
      }
    </div>
  )
}