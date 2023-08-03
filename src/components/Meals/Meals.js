import React from "react";
import "./Meals.css";
const Meals = () => {
  const mealsList = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
    {
      name: "Schnitzel",
      description: "A german specialty",
      price: "$16.50",
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "$12.99",
    },
    {
      name: "Chicken Kebab",
      description: "Kebabs and veggies",
      price: "$20.99",
    },
  ];
  return (
    <div>
      <div className="meals">
        <div className="meals-dish">
          {mealsList.map((meal) => {
            return (
              <>
                <div className="meals-name">{[meal.name]}</div>
                <div className="meals-desc">{[meal.description]}</div>
                <div className="meals-price">{[meal.price]}</div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meals;
