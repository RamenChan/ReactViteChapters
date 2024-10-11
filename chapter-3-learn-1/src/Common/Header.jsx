import React from 'react'
import './Header.css'
import Logo from "../image/Logo.png"
import cart from "../image/Cart1.png"
import favorites from "../image/Favorites.png"
import user from "../image/User.png"
import { NavLink, useNavigate } from 'react-router-dom'


function Header() {

  let navigate = useNavigate();
  return (

    <div className='header'>
      <img className='logo' src={Logo} />
      <input type="text" className='input' placeholder='      Search' />
      <NavLink className='links' to="/">Home</NavLink>
      <NavLink className='links' to="/products">Product Page</NavLink>
      <a href="#" className='links' >Contact Us</a>
      <a href="#" className='links' >Blog</a>
      <button className='cart' onClick={() => navigate("/cart")}>
        <img src={cart} />
      </button>

      <img className='favorites' src={favorites} />
      <img className='user' src={user} />


    </div>
  )
}

export default Header
