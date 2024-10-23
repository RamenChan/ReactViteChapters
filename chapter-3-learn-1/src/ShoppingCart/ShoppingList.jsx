import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import styles from './ShoppingList.module.css';

function ShoppingList() {

    const [productIds, setProductIds] = useState([]);
    const [productDetails, setProductDetails] = useState([]);

    const fetchProductIds = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products/");
            setProductIds(response.data.map(product => product.id));
        } catch (error) {
            console.error('Error fetching product IDs:', error);
        }
    };

    const fetchProductDetails = async (id) => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            console.log(data); // Print each product's details to the console
            setProductDetails(prevDetails => [...prevDetails, data]); // Optionally store details
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        fetchProductIds();
    }, []);

    useEffect(() => {
        if (productIds.length > 0) {
            productIds.forEach(id => {
                fetchProductDetails(id);
            });
        }
    }, [productIds]);

    return (
        <div>
            <h1>Product Details</h1>
            <ul>
                {productDetails.map((product, index) => (
                    <div className={styles.items} key={index}>
                        <img src={product.image} alt="" />
                        {product.title}
                        <button>-</button>
                        {1}
                        <button>+</button>
                        {product.price}
                        </div>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList
