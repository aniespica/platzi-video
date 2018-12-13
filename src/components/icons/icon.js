import React from 'react'
export default function Icon(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
      height={props.size} width={props.size}  fill={props.color}>
      <title>{props.title}</title>
      {props.children}
    </svg>
  )
}