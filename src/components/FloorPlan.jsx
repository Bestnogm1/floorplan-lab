import React from "react";
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

export default function FloorPlan() {
  return (
    <div class="main-body">
      <Bedroom  bedNum={1}  />
      <Bath size='Full' />
        <Bedroom bedNum={2}  />
      <Bath size='Half' />
      <Bedroom bedNum={3}  />
      <LivingRoom  />
      <Kitchen  />
      </div>
    
  )
}
