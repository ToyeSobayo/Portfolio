import "./intro.css"

import React from 'react'

const Intro = () => {
  return (
    <div className ="i">
      <div className = "i-left">
        <div className = "i-left-wrapper">
          <h2 className = "i-intro">Yo</h2>
          <h1 className = "i-name">Toye Sobayo</h1>
          <div className = "i-title"> 
           <div className = "i-title-wrapper">
           <div className = "i-title-item">Student</div> 
           <div className = "i-title-item">Programmer</div>
           <div className = "i-title-item">The Honored One</div>
           </div>
          </div>
        </div>
      </div>
      <div className = "i-right">right</div>
    </div>
  )
}

export default Intro
