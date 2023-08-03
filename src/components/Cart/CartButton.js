import React, { useState } from 'react'
import './CartButton.css'

const CartButton = (props) => {
    const [count, setCount] = useState(0);
    // const [open, setOpen] = useState(false);

    // const openCartHandler = () =>{
    //     setOpen(true)
    // }
    const showCartCount = () =>{
        setCount(count)
    }
  return (
    <div>
    <div className='btn'>
        <button className='btn-cart' onClick={props.onClick}>Your Cart <span className='span-count'>{count}</span></button>
    </div>
    </div>
  )
}

export default CartButton