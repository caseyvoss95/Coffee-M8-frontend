import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { database } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    //user state
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(database, "users");

    //register state
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    //authentication state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerUsername, registerPassword);
            console.log(user);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {

    }

    const logout = async () => {

    }

    const handleRegisterUserChange = (event) => {
        setRegisterUsername()
    }



    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data);
        }

        getUsers()

    }, []);

    return (
        <div className="container">
            <h1>login screen</h1>
            <Link to="/drink"><button className="btn">User Login</button></Link>
            <Link to="/order"><button className="btn">Host Login</button></Link> <br/>
            
            <input placeholder="register username" onChange={(event) => {setRegisterUsername(event.target.value)}}/>
            <input placeholder="register password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
            <button onClick={register}>register</button><br/>
            
            <input placeholder="username" onChange={(event) => {setUsername(event.target.value)}}/>
            <input placeholder="password" onChange={(event) => {setPassword(event.target.value)}}/>
            <button>login</button>

            <h1>current users:</h1>
            {users.map((user) => {return <div><h1>{user.username}</h1></div>})}
        </div>
    )
}

export default Login