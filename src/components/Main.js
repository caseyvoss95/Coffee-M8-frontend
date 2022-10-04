import { useState, useEffect } from "react";
import { Route, Switch, } from "react-router-dom";
import Login from "../pages/Login";
import DrinkForm from "./DrinkForm";
import NewOrder from "./NewOrder";
import OrderIndex from "./OrderIndex";

const Main = () => {
  //state container for all drinks
  const [drinks, setDrinks] = useState(null);

  const createURL = "http://localhost:4000/orders/allItems/";

  //post route for drink
  const createDrink = async (drink) => {
    await fetch(createURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(drink)
    });
  }

  const getURL = "http://localhost:4000/orders/allItems/63372013187b01b84368ce48/";

  //index route for host
  const getDrinks = async () => {
    const response = await fetch(getURL);
    const data = await response.json();
    setDrinks(data);
    console.log('drinks we have', data);
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

  useEffect(() => { getDrinks() }, []);


  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/drink">
        <div className="container">
          <h1>How would you like your drink?</h1>
          <DrinkForm drink={drinks} setDrinks={setDrinks} createDrink={createDrink} />
        </div>
      </Route>
      <Route path="/order">
        <OrderIndex drinks={drinks} getDrinks={getDrinks} />
      </Route>
      <Route path="/createNewOrder">
        <NewOrder />
      </Route>
    </Switch>
  )
}

export default Main;