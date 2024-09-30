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
function App() {

  return (
    <div className='container'>
        <Header/>
        <Banner/>
    </div>
  )
}

export default App
