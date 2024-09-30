import React from 'react'
import './Banner.css'
import iphone from "../image/iphoneImage.png"

function Banner() {
  return (
    <div className="banner">
        <div className="content">
            <p>Pro.Beyond.</p>
            <h2>Iphone 14 Pro</h2>
            <p>Created to change everything for the better. For everyone</p>
            <button>Shop Now</button>
        </div>
        <img src={iphone} alt="" />
        
        
    </div>
  )
}

export default Banner
