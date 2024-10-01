import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Home/Header'
import Banner from './Home/Banner'
import Banner2 from './Home/Banner2'
import Category from './Home/Category'
import Products from './Home/Products'
function App() {

  

  return (
    <div className='container'>
        <Header/>
        <Banner/>
        <Banner2/>
        <Category/>
        <Products/>
      
    </div>
  )
}

export default App
