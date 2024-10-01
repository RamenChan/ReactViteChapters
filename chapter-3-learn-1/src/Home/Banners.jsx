import React from 'react'
import airPod from '../image/airpods.png'
import ipadPro from '../image/ipadPro.png'
import macbookPro from '../image/macbookPro.png'
import samsunGalaxy from '../image/samsunGalaxy.png'
import stupidwatch from '../image/stupidwatch.png'
import './Banners.css'

function Banners() {
    return (
        <div className='banners'>
            <div className="banners-card1">
                <img className='airpod-banners' src={airPod} />
                <img className='stupidwatch-banners' src={stupidwatch} />
                <h1>Popular Products</h1>
                <p>iPad combines a magnificent 10.2-inch Retina display, <br /> incredible performance, multitasking and <br /> ease of use.</p>
                <button>Shop Now</button>
            </div>
            <div className="banners-card2">
                <img src={ipadPro} alt="" />
                <h1>Ipad Pro</h1>
                <p>iPad combines a magnificent 10.2-inch Retina display, <br /> incredible performance, multitasking and ease of use.</p>
                <button>Shop Now</button>

            </div>
            <div className="banners-card3">
                <img src={samsunGalaxy} alt="" />
                <h1>Samsung Galaxy</h1>
                <p>iPad combines a magnificent 10.2-inch Retina display, <br /> incredible performance, multitasking and ease of use.</p>
                <button>Shop Now</button>
            </div>
            <div className="banners-card4">
                <img src={macbookPro} alt="" />

                <h1>Macbook Pro</h1>
                <p>iPad combines a magnificent 10.2-inch Retina display, <br /> incredible performance, multitasking and ease of use.</p>


                <button>Shop Now</button>
            </div>
        </div>
    )
}

export default Banners
