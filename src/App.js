import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isItemShow, setIsItemShow] = useState(false)

  const showCartItemHandler = () =>{
    setIsItemShow(true)
  }

  const hideCartItemHandler = () =>{
    setIsItemShow(false)
  }
  return (
    <CartProvider>
      {isItemShow && <Cart onClose={hideCartItemHandler}/>}
      <Header onShowCart={showCartItemHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
