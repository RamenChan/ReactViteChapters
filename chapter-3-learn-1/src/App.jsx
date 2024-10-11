import './App.css'
import Home from "./Home/Home.jsx"
import Header from './Common/Header.jsx'
import Footer from './Common/Footer'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage/ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'
import axios from 'axios'
import { useState } from 'react'

function App() {


  const [product,setProduct] = useState([]);

  const addCart = async (id) =>{
    
    const response = await axios.post("http://localhost:3001/products",{
      id,
      quantity:1
    })
    console.log(response)
    const cartProduct = [
      ...product,response.data
    ];
    setProduct(cartProduct);
  }
  

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/products/:productID' element={<ProductDetail shoppingCart={addCart} />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
