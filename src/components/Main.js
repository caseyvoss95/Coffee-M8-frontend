import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Login from "../pages/Login";
import DrinkForm from "./DrinkForm";
import NewOrder from "./NewOrder";
import OrderIndex from "./OrderIndex";
import Register from "../pages/Register";

const Main = () => {

  //history utility loaded
  // const history = useHistory();

  //authentication state
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({})


  //all drinks state
  const [drinks, setDrinks] = useState(null);

  const createDrinkURL = "http://localhost:4000/orders/allItems/";

  //post route for drink
  const createDrink = async (drink) => {
    await fetch(createDrinkURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(drink)
    });
  }


  const createOrderURL = "http://localhost:4000/orders/allOrders/";

  //post route for order
  const createOrder = async (order) => {
    await fetch(createOrderURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(order)
    });
  }

  const getDrinksURL = "http://localhost:4000/orders/allItems/63372013187b01b84368ce48/";

  //index route for host
  const getDrinks = async () => {
    const response = await fetch(getDrinksURL);
    const data = await response.json();
    setDrinks(data);
    console.log('drinks we have', data);
  }

  useEffect(() => { getDrinks() }, []);

  return (
    <div className="main">
      <Nav setLoggednIn={setLoggedIn} loggedIn={loggedIn} user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/register">
          <Register />
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
        <Route path="/createNewOrder" >
          <NewOrder createOrder={createOrder} />
        </Route>
      </Switch>
    </div>
  )
}


export default Main;