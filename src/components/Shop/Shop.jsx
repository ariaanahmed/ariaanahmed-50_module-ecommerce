import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../Utilities/Utilities';
import './Shop.css';
const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = []
        // step 1: get id
        for (const id in storedCart) {
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);
            if (addedProduct) {
                // step 3: get the quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the addedProduct to the savedCart
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart)
    }, [products])
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find((pd) => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);

        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;