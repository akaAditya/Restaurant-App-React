import React, { useState } from 'react'
import './CartButton.css'
const CartButton = () => {
    const [count, setCount] = useState(0)
    const showCartCount = () =>{
        setCount(count)
    }
  return (
    <div>
    <div className='btn'>
        <button>Your Cart <span>{count}</span></button>
    </div>
    </div>
  )
}

export default CartButton