import React from 'react'
import styles from './Content.module.css'
import { useEffect, useState } from "react";

function Content() {
    const [categories, setCategories] = useState([]);
    const adres = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then((data) => setCategories(data));
    }, []);
    console.log(categories);

    return (
        <div className={`${styles.content}`}>
            <div className={`${styles.filters}`}>
                <p className={`${styles.text}`}><b>Categories</b></p>
                {categories.slice().map((p) =>
                <button className={`${styles.text}`}><b>{p}</b></button>
            )}
            </div>
            <div className={`${styles.products}`}>

            </div>

        </div>
    )
}

export default Content