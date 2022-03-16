import React from 'react';
import Oven from './Oven'
import Sink from './Sink'

export default function Kitchen(props) {
  return (
    <div>
      <div class="oven-sink">
        <Oven class="oven" />
        <Sink />
      </div>
      <div class="kitchen"> 
        <h1 >Kitchen </h1>
      </div>
    </div>
  )
}