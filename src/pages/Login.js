import { Link } from "react-router-dom";
import { useState } from "react";

import { auth } from "../firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    //authentication state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState({})

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, username, password);
            console.log(user);
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
            <Link to="/register"><button className="btn">User Registration</button></Link> <br/>

            <input placeholder="username" onChange={(event) => {setUsername(event.target.value)}}/>
            <input placeholder="password" onChange={(event) => {setPassword(event.target.value)}}/>
            <button className="btn btn-sm" id="login" onClick={login}>login</button>

            <h1>logged in user:</h1>
            {user?.email}
       </div>
    )
}

export default Login