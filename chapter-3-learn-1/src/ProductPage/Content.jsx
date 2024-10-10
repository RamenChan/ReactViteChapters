import React, { useEffect, useState } from 'react';
import styles from './Content.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function Content() {
    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    // Tüm itemleri çek
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);

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
                .then((data) => setProductsFiltered(data));
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
                    <div key={category}>
                        <input
                            type="radio"
                            name="radio"
                            onClick={() => setSelectedCategory(category)}
                            className={`${styles.text}`}
                        />
                        <b>{category}</b>
                    </div>
                ))}
                <button >clear</button>
            </div>

            <div className={`${styles.products}`}>
                {productsFiltered.length > 0 ? (
                    productsFiltered.map((product) => (
                        <div key={product.id} className={`${styles.card}`}>
                            <img src={product.image} alt={product.title} className={styles.productImage} />
                            <div className={styles.memos}>
                                <h2>{truncate(product.title, 20)}</h2>
                                <p>Price: ${product.price}</p>
                                <button onClick={() => navigate("/products/" + product.id)} >Buy Now</button>
                            </div>
                        </div>
                    ))
                ) : (
                    products.map((productt) => (
                        <div key={productt.id} className={`${styles.card}`}>
                            <img src={productt.image} alt={productt.title} className={styles.productImage} />
                            <div className={styles.memos}>
                                <h2>{truncate(productt.title, 20)}</h2>
                                <p>Price: ${productt.price}</p>
                                <button onClick={() => navigate("/products/" + productt.id)} >Buy Now</button>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Content;
