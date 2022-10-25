import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings);

  const handleChecked = (index, newChecked) => {
    setChecked((prevValue) => {
      const checkedToppings = [...prevValue];
      checkedToppings[index].selected = newChecked;
      return checkedToppings;
    });
  };

  let checkedCount = 0
  checked.forEach((topping) => checkedCount += topping.selected)
  
  let totalPrice = 0
  checked.forEach((topping) => {if(topping.selected){
        totalPrice += topping.price 
      } else {}}) 
  

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {checkedCount}, total price: {totalPrice} Euro</p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            checked={topping.selected}
            onChange={(newChecked) => handleChecked(index, newChecked)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
