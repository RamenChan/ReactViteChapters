import React from 'react'
import "./Products.css"
import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);
  const adres = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(adres)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <div className='products'>
      {products.slice(0, 8).map((p) =>
        <div className="card" key={p.id}>
          <img src={p.image} alt={p.title} className="product-image" />
          <div className="memos">
            <h2>{p.title}</h2>
            <p>Price: ${p.price}</p>
            <button>Buy Now</button>
          </div>

        </div>
      )}
    </div>
  )
}

export default Products
