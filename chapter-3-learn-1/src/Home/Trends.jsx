import React from 'react';
import './Trends.css';
import { useEffect, useState } from "react";

function Trends() {

  const [products, setProducts] = useState([]);
  const adres = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(adres)
      .then((res) => res.json())
      .then((data) => {
        // Gelen ürünleri rastgele sırala
        const shuffledProducts = data.sort(() => Math.random() - 0.5);
        // İlk 8 ürünü ayır
        const selectedProducts = shuffledProducts.slice(0, 4);
        setProducts(selectedProducts);
      });
  }, []);

  return (
    <div className='trends'>
      {products.map((p) =>
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
  );
}

export default Trends;