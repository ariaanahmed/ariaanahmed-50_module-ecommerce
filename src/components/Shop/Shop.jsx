import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('fakeData/products.json').then(res => res.json()).then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>products coming here {products.length}</h1>
            </div>
            <div className="cart-container">
                <h2>order summary</h2>
            </div>
        </div>
    );
};

export default Shop;