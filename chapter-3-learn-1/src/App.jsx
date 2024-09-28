import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'
import Product from './product'
function App() {

  return (
    <div>
        <Container>
          <Product />
        </Container>        
    </div>
  )
}

export default App
