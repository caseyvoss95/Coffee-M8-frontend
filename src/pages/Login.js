import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setLoggedIn }) => {

    //special thanks to PedroTech for various Firebase tutorials
    //https://www.youtube.com/c/PedroTechnologies

    //authentication states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const login = async (event) => {
        try {
            const user = await signInWithEmailAndPassword(auth, username, password);
            console.log(user);
            localStorage.setItem('loggedIn', true);
            setLoggedIn(true);
            //to test: do I need to reset fields if we're changing pages?
            setUsername("");
            setPassword("");
            history.push('/drink');
        }
        catch (error) {
            console.log(error.message);
            setPassword("");
        }
    }

    return (
        <div className="container">
            <h1>login screen</h1>
            <Link to="/drink"><button className="btn">User Login</button></Link>
            <Link to="/order"><button className="btn">Host Login</button></Link>
            <Link to="/register"><button className="btn">User Registration</button></Link> <br />

            <input placeholder="username" onChange={(event) => { setUsername(event.target.value) }} value={username} />
            <input placeholder="password" onChange={(event) => { setPassword(event.target.value) }} value={password}/>
            <button className="btn btn-sm" id="login" onClick={login}>login</button>
        </div>
    )
}

export default Login