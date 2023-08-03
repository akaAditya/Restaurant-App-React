import React, { Fragment, useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true)
  }

  const hideCartHandler = ()=>{
    setShowCart(false)
  }
  return (
    <Fragment>
      {showCart && <Cart onCloseCart={hideCartHandler}/>}
      <header>
        <Navbar onShowCart={showCartHandler}/>
      </header>
      <main>
        <Summary />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
