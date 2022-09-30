import { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import DrinkForm from "./DrinkForm";
import drinkSeed from "./drinkSeed";

const Main = () => {
  //create default drink
  const [drink, setDrink] = useState({
    productName: drinkSeed.productName[0],
    productType: drinkSeed.productType[0],
    productSize: drinkSeed.productSize[0],
    productImage: drinkSeed.productImage[0],
    milk: drinkSeed.milk[0],
    flavor: drinkSeed.flavor[0],
    topping: drinkSeed.topping[0]
  });

  const URL = "http://localhost:4000/allOrders/"

  //post route for drink TODO: finish
  const createDrink = async (drink) => {
    await fetch()
  }


  return (
    <Switch>
      <Route exact path="/">
        <h1>login screen</h1>
        <Link to="/order"><button>Login</button></Link>
      </Route>
      <Route path="/order">
        <div>
          <h1>How would you like your drink?</h1>
          <DrinkForm drink={drink} setDrink={setDrink} />
        </div>
      </Route>
    </Switch>
  )
}

export default Main;