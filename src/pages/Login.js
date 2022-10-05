import { Link } from "react-router-dom";
import { useState } from "react";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setLoggedIn }) => {

    //special thanks to PedroTech for various Firebase tutorials
    //https://www.youtube.com/c/PedroTechnologies

    //authentication states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        try {
            const user = await signInWithEmailAndPassword(auth, username, password);
            console.log(user);
            localStorage.setItem('loggedIn', true);
            setLoggedIn(true);
            //todo: set username and password fields to empty string?
            //or, just move to the order page.
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <h1>login screen</h1>
            <Link to="/drink"><button className="btn">User Login</button></Link>
            <Link to="/order"><button className="btn">Host Login</button></Link>
            <Link to="/register"><button className="btn">User Registration</button></Link> <br />

            <input placeholder="username" onChange={(event) => { setUsername(event.target.value) }} />
            <input placeholder="password" onChange={(event) => { setPassword(event.target.value) }} />
            <button className="btn btn-sm" id="login" onClick={login}>login</button>
        </div>
    )
}

export default Login