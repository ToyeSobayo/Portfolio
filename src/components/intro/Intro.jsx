import "./intro.css"
import Me from "../../img/Nah.gif"
import React from 'react'

const Intro = () => {
  return (
    <div className ="i">
      <div className = "i-left">
        <div className = "i-left-wrapper">
         <h2 className = "i-intro">Yo, I'm</h2>
         <h2 className = "i-name">Toye Sobayo</h2>
         <div className = "i-title"> 
          <div className = "i-title-wrapper">
           <div className = "i-title-item">Student</div> 
           <div className = "i-title-item">Programmer</div>
           <div className = "i-title-item">MongoDB Glazer</div>
           <div className = "i-title-item">LeetCode Warrior</div>
          </div>
         </div>
         <div className = "i-description">
          description
         </div>
        </div>
      </div>
      <div className = "i-right">
        <div className = "i-bg"></div>
        <img src = {Me} alt = "" className = "i-img" />
      </div>
    </div>
  )
}

export default Intro
