import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'
import Product from './product'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Example from './onePage'
import Banner from './Banner'
import Banner2 from './Banner2'
import Category from './Category'
function App() {

  return (
    <div className='container'>
        <Header/>
        <Banner/>
        <Banner2/>
        <Category/>
    </div>
  )
}

export default App
