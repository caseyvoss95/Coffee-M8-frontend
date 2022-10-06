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

    const handleEnter = async (event) => {
        if (event.key === 'Enter') {
            login();
        }
    }

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
            <h1>Sign in to order</h1>
            <div className="form-group">
                <input className="form-control" placeholder="email" onChange={(event) => { setUsername(event.target.value) }} value={username} onKeyPress={handleEnter} />
                <input className="form-control" placeholder="password" onChange={(event) => { setPassword(event.target.value) }} value={password} onKeyPress={handleEnter} />

            </div>
            <button className="btn" id="login" onClick={login}>Sign in</button>
            <Link to="order">hosting an event?</Link>
        </div>



    )
}

export default Login