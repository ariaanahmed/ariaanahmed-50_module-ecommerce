import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product
    return (
        <div className='product-cards'>
            <img src={img} alt="product-image" />
            <div className='padding-for-card'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-ratings'>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;