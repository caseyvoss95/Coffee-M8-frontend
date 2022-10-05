import { useState, useEffect } from "react";
import { Route, Switch, useHistory} from "react-router-dom";
import Nav from "./Nav";
import Login from "../pages/Login";
import DrinkForm from "./DrinkForm";
import NewOrder from "./NewOrder";
import OrderIndex from "./OrderIndex";
import Register from "../pages/Register";

const Main = () => {

  const history = useHistory();

  //authentication state
  const [loggedIn, setLoggedIn] = useState(false);

  //all drinks state
  const [drinks, setDrinks] = useState(null);

  const createURL = "https://coffee-m8-backend.herokuapp.com/orders/allItems/";

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

  const getURL = "https://coffee-m8-backend.herokuapp.com/orders/allItems/63372013187b01b84368ce48/";

  //index route for host
  const getDrinks = async () => {
    const response = await fetch(getURL);
    const data = await response.json();
    setDrinks(data);
    console.log('drinks we have', data);
  }

  useEffect(() => { getDrinks() }, []);

  return (
    <div className="main">
      <Nav setLoggednIn={setLoggedIn} loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {loggedIn ? <Route path="/drink">
          <div className="container">
            <h1>How would you like your drink?</h1>
            <DrinkForm drink={drinks} setDrinks={setDrinks} createDrink={createDrink} />
          </div>
        </Route> : history.push("/")}
        {loggedIn ? <Route path="/order">
          <OrderIndex drinks={drinks} getDrinks={getDrinks} />
        </Route>  : history.push("/")}
        {loggedIn && <Route path="/createNewOrder">
          <NewOrder />
        </Route>}
      </Switch>
    </div>

  )
}


export default Main;