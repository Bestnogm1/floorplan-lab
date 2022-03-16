import React from 'react'

export default function Bath(props) {
  return (
    <div className='bath' id={`bath-${props.size}`}> 
      <h1>{props.size} Bath</h1>
    </div>
  )
}