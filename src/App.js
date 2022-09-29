import { Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <h1>login screen</h1>
          <Link to="/order"><button>Login</button></Link>
        </Route>
        <Route path="/order">
        <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
