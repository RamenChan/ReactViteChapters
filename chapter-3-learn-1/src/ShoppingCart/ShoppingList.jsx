import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import ShoppingList from './ShoppingList';

function ShoppingList() {

    const [product, setProducts] = useState([]);
    const adres = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(adres)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/products/")
        response.data.map((res) => {
            console.log(res.id);
        })

    }
    return (
        <div>

        </div>
    )
}

export default ShoppingList
