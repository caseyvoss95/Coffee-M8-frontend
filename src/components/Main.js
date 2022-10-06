import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navi from "./Nav";
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

  const createDrinkURL = "https://coffee-m8-backend.herokuapp.com/orders/allItems/";

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


  const createOrderURL = "https://coffee-m8-backend.herokuapp.com/orders/allOrders/";

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

  const getDrinksURL = "https://coffee-m8-backend.herokuapp.com/orders/allItems/63372013187b01b84368ce48/";

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

      <Navi setLoggednIn={setLoggedIn} loggedIn={loggedIn} user={user} setUser={setUser} />
      <div className="container" id="user">
        {user?.email}
      </div>
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
            <DrinkForm drink={drinks} setDrinks={setDrinks} createDrink={createDrink} user={user} setUser={setUser}/>
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