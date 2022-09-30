import { useState } from "react";
import DrinkForm from "./DrinkForm";
import drinkSeed from "./drinkSeed";

const Main = () => {
  const [drink, setDrink] = useState({
    productName: drinkSeed.productName[0],
    productType: drinkSeed.productType[0],
    productSize: drinkSeed.productSize[0],
    productImage: drinkSeed.productImage[0],
    milk: drinkSeed.milk[0],
    flavor: drinkSeed.flavor[0],
    topping: drinkSeed.topping[0]
});

  
  return (
    <div>
        <h1>How would you like your drink?</h1>
        <DrinkForm drink={drink} setDrink={setDrink}/>
    </div>
  )
}

export default Main;