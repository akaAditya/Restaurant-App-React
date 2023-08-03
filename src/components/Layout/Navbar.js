import React from 'react'
import CartButton from '../Cart/CartButton'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div>
        <nav>
        <div className='nav-header'>
            <h3>React Meals</h3>
            <CartButton onClick={props.onShowCart}/>
        </div>

        </nav>
    </div>
  )
}

export default Navbar