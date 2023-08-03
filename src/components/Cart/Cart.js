import React, { useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    // const [close, setClose] = useState(false);
    

    // const closeCartHandler = () =>{
    //     setClose(true)
    // }


    const cartItems = <ul className={classes['cart-items']}>{
        [{id : 'd1', name: 'Sushi', amount: 2, price: 12.99}].map((item) =>{
            return <li>{item.name}</li>
        })
        }
    </ul>
    
  return (
    <Modal onCloseCart={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>30.99</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>

        </div>
    </Modal>
  )
}

export default Cart