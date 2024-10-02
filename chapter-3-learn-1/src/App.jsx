import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home/Home.jsx"
import Header from './Home/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage/ProductPage.jsx'

function App() {



  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
      </Routes>
      

    </div>
  )
}

export default App
