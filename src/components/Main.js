import { useState } from "react";
import { Route, Switch, } from "react-router-dom";
import Login from "../pages/Login";
import DrinkForm from "./DrinkForm";
import HostView from "../pages/HostView";
import drinkSeed from "./drinkSeed";

const Main = () => {
  //create default drink
  const [drinks, setDrinks] = useState({
    productName: drinkSeed.productName[0],
    productType: drinkSeed.productType[0],
    productSize: drinkSeed.productSize[0],
    productImage: drinkSeed.productImage[0],
    milk: drinkSeed.milk[0],
    flavor: drinkSeed.flavor[0],
    topping: drinkSeed.topping[0],
  });

  const URL = "http://localhost:4000/orders/allOrders/63372013187b01b84368ce48/addCustomizedDrink";

  //post route for drink
  const createDrink = async (drink) => {
    await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(drink)
    });
    //refresh index method (getDrinks) would be called here, if applicable, but probably not since 1 user shouldn't be able to see all drinks.
    //maybe we could index all drinks that an individual user orders
  }

  // //update drink route
  // const updateDrink = async (drink) => {
  //   await fetch(URL, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "Application/json"
  //     },
  //     body: JSON.stringify(drink)
  //   })
  //   //refresh index here.. "" etc
  // }


  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/drink">
        <div>
          <h1>How would you like your drink?</h1>
          <DrinkForm drink={drinks} setDrinks={setDrinks} createDrink={createDrink} />
        </div>
      </Route>
      <Route path="/order">
        <HostView/>
      </Route>
    </Switch>
  )
}

export default Main;