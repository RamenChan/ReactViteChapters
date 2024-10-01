import React from 'react'
import './Banner3.css'
import wach from "../image/wach.png"
import phone1 from "../image/phone1.png"
import ipad1 from "../image/ipad1.png"
import ipad2 from "../image/ipad2.png"
import ok from "../image/ok.png"

function Banner3() {
  return (
    <div className='banner3'>
      <div clasName='left'>
      < img className='ipad' src={ipad1} alt="" />
      <img className='ipad2' src={ipad2} alt="" />
      <img className='ok1' src={ok} alt="" />
      </div>
      <div className='middle'></div>
      <div className='right'>
        <img className='wach' src={wach} alt="" />
        <img className='phone1' src={phone1} alt="" />
      </div>
   
     
    
    </div>
  )
}

export default Banner3
