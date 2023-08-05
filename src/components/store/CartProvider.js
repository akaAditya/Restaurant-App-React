import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) =>{
    const [items, updateItems] = useState([]);

    const addItemToCartHandler = (item) =>{
        updateItems([...items, item]);
        console.log('inside additem',cartContext)
    }

    const removeItemFromCartHandler = (id) =>{};

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message : 'click here'
    };
    return (
        <CartContext.Provider value={cartContext}>
            {console.log('reinitialised', cartContext)}
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
