import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';


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
        <div className={`${styles.product_detail}`}>
            <img src={product.image} className={`${styles.product_image}`} />
            <div className={`${styles.product_info}`}>
                <h1>{product.title}</h1>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
                <div className={`${styles.product_button}`}>
                    <button className={`${styles.wishlist_button}`}>Add To Wishlist</button>
                    <button className={`${styles.cart_button}`}>Add To Cart</button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetail
