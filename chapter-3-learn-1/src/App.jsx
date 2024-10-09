import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home/Home.jsx"
import Header from './Common/Header.jsx'
import Footer from './Common/Footer'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage/ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'

function App() {

  

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/products/:productID' element={<ProductDetail/>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
