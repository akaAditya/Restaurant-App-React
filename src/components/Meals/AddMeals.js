import React, { useState } from "react";
import "./AddMeals.css";
const AddMeals = () => {
  const [quantity, setQuantity] = useState(1);

  const addQuantityHandler = () => {
    setQuantity(quantity+1);
  };
  return (
    <div>
      <div className="right-side-meals">
        <form className="amount-quantity">
          <label className="amount">Amount</label>
          <input className="meals-quantity" min='1' max='5' defaultValue='1' value={quantity}/>
        </form>
          <button className="add-button" onClick={addQuantityHandler}>+Add</button>
      </div>
    </div>
  ); 
};

export default AddMeals;
