import React from 'react'
import Category from './category'
import Search from '../../containers/search'
import './categories.css'
export default function Categories(props){
  return (
    <div className="Categories">
      <Search/>
      {
        props.categories.map((category, i) => {
          return <Category {...category} handleOpenModal={props.handleOpenModal} key={i}/>
        })
      }
    </div>
  )
}