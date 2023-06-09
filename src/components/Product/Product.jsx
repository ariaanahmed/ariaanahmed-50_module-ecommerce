import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='product-cards'>
            <img src={img} alt="product-image" />
            <div className='padding-for-card'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-ratings'>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;