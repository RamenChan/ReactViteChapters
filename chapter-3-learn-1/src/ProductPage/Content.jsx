import React from 'react'
import styles from  './Content.module.css'
import { useEffect, useState } from "react";

function Content() {
    const [products, setProducts] = useState([]);
    const adres = "https://fakestoreapi.com/products";
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setProducts(data));
    }, []);
  
  return (
    <div className={`${styles.content}`}>
        <div className={`${styles.filters}`}>
            <p>Categories</p>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="" />
                <label class="form-check-label" for=""> Default checkbox </label>
            </div>
        </div>
        <div className={`${styles.products}`}>

        </div>

    </div>
  )
}

export default Content