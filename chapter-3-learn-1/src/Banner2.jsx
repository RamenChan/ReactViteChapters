import React from 'react'
import "./Banner2.css"
import PlayStation from "./image/PlayStation.png"
import macbook from "./image/MacBook.png"

function Banner2() {
    return (
        <div className='banner2'>
            <div className='leftbanner2'>
                <div className='playstation'>
                    <img src={PlayStation} alt="" />
                    <div className='playstation-text'>
                        <h2>Playstation 5</h2>
                        <h1>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</h1>
                    </div>
                </div>
                <div className='apple'>
                    <div className='headset'></div>
                    <div className='vr'></div>
                </div>
            </div>
            <div className='macbook'>
                <div className='playstation-text'>
                    <h2>Macbook Air</h2>
                    <h1>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</h1>
                    <button>Shop Now</button>
                </div>
                <img src={macbook} alt="" />
            </div>
        </div>
    )
}

export default Banner2