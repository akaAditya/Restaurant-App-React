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
        <div className="amount-quantity">
          <span className="amount">Amount</span>
          <span className="meals-quantity">{quantity}</span>
        </div>
          <button className="add-button" onClick={addQuantityHandler}>+Add</button>
      </div>
    </div>
  ); 
};

export default AddMeals;
