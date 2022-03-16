import React from 'react'

export default function Bedroom(props) {
  return ( 
    <div className='bedroom' id={`bed-${props.bedNum}`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  )
}