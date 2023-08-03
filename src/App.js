import React from "react";
import Navbar from "./components/Layout/Navbar";
import Summary from './components/Layout/Summary';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <div>
    <Cart />
      <header>
        <Navbar />
      </header>
      <main>
        <Summary />
        <Meals />
      </main>
    </div>
  );
}

export default App;
