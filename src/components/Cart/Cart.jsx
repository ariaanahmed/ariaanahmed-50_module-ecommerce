import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart - option 1
    // const {cart} = props; - option 2

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    // 5% tax hisebe ekhane dhora hocche
    const tax = totalPrice * 5 / 100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>order summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping:${totalShipping.toFixed(2)}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;