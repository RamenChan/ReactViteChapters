import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"


function ProductDetail() {

    const [product, setProduct] = useState(null);
    const { productID } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error fetching product:', error));
    }, [productID]);

    if (!product) {
        return <div>Loading...</div>; // Ürün verisi yüklenirken gösterilecek
    }

    return (
        <div className='product-detail'>
            <img src={product.image} className='product-image' />
            <div className='product-info'>
                <h1>{product.title}</h1>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
                <div className='product-button'>
                    <button className='wishlist-button'>Add To Wishlist</button>
                    <button className='cart-button'>Add To Cart</button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetail
