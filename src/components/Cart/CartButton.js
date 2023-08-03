import React, { useState } from 'react'
import './CartButton.css'
import Cart from './Cart'
const CartButton = () => {
    const [count, setCount] = useState(0)
    const showCartCount = () =>{
        setCount(count)
    }
  return (
    <div>
    <div className='btn'>
        <button className='btn-cart'>Your Cart <span className='span-count'>{count}</span></button>
    </div>
    </div>
  )
}

export default CartButton