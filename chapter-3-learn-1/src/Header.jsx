import React from 'react'
import './Header.css'
import Logo from "./image/Logo.png"
import cart from "./image/Favorites.png"
import favorites from "./image/Cart1.png"
import user from "./image/User.png"



function Header() {
  return (

    <div className='header'>
      <img className='logo' src={Logo}/>
      <input type="text" className='input'  placeholder='      Search'/>
      <a href="#" className='links' >Home</a>
      <a href="#" className='links' >About</a>
      <a href="#" className='links' >Contact Us</a>
      <a href="#" className='links' >Blog</a>
      <img className='cart' src= {cart}/>
      <img className='favorites' src= {favorites}/>
      <img className='user' src= {user}/>
      

    </div>
  )
}

export default Header
