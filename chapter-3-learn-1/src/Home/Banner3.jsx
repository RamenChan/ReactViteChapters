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
      <div className='left'>
        <img className='ok' src={ok} alt="" />
        <img className='ipad2' src={ipad2} alt="" />
        <img className='ipad1' src={ipad1} alt="" />
      </div>
      <div className='middle'>
            <p>Big Summer <b>Sale</b></p>
            <h5>Commodo fames vitae vitae leo mauris in. Eu consequat.</h5>
            <button>Shop Now</button>
      </div>
      <div className='right'>
        <img className='phone' src={phone1} alt="" />
        <img className="watch" src={wach} alt="" />
        </div>
      </div>
  )
}

export default Banner3
