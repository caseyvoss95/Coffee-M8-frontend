import { useState } from "react";
import DrinkForm from "./DrinkForm";

const Main = () => {
  const [drink, setDrink] = useState(null);
  
  return (
    <div>
        <h1>How would you like your drink?</h1>
        <DrinkForm drink={drink}/>
    </div>
  )
}

export default Main;