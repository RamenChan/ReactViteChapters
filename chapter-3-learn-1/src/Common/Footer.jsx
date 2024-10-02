import React from 'react'
import "./Footer.css"
import Twitter from "../image/Twitter.png"
import Facebook from "../image/Facebook.png"
import Instagram from "../image/Instagram.png"
import Tiktok from "../image/Tiktok.png"
import Logo from "../image/Logo.png"

function Footer() {
    return (
        <div className="footer">
            <div className='muhterem'>
                <div className="footer1">
                    <img src={Logo} />
                    <p>We are residental interior design firm located in
                        <span>Portand. Our
                            boutique-studio offers more than</span>
                    </p>
                </div>
                <div className="footer2">
                    <h2>Services</h2>
                    <p>Bonus Program</p>
                    <p>Gift Cards</p>
                    <p>Credit and payment</p>
                    <p>service contracts</p>
                    <p>Non-cash account</p>
                    <p>Payment</p>
                </div>
                <div className="footer3">
                    <h2>Asistance to the buyer</h2>
                    <p>Find an order</p>
                    <p>Terms of delivery</p>
                    <p>Exchange and return of goods</p>
                    <p>Guarantee</p>
                    <p>Frequently asked questions</p>
                    <p>Terms of use of the site</p>
                </div>
            </div>

            <div className="socials">
                <img src={Twitter} />
                <img src={Facebook} />
                <img src={Tiktok} />
                <img src={Instagram} />
            </div>
        </div>

    )
}

export default Footer
