import React, { useEffect, useState } from 'react';
import styles from './Content.module.css';

function Content() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Kategorileri çek
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then((data) => setCategories(data));
    }, []);

    // Seçilen kategoriye göre ürünleri çek
    useEffect(() => {
        if (selectedCategory) {
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then(res => res.json())
                .then((data) => setProducts(data));
        }
    }, [selectedCategory]);

    // Metni kısaltan fonksiyon
    function truncate(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    return (
        <div className={`${styles.content}`}>
            <div className={`${styles.filters}`}>
                <p className={`${styles.text}`}><b>Categories</b></p>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`${styles.text}`}
                    >
                        <b>{category}</b>
                    </button>
                ))}
            </div>

            <div className={`${styles.products}`}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className={`${styles.card}`}>
                            <img src={product.image} alt={product.title} className={styles.productImage} />
                            <div className={styles.memos}>
                                <h2>{truncate(product.title, 20)}</h2>
                                <p>Price: ${product.price}</p>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
}

export default Content;
