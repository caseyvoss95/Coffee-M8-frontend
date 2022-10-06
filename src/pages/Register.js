import { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    //register state
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerUsername, registerPassword);
            console.log(user);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <h1>Sign up</h1>
            <div className="form-group">
                <input className="form-control" placeholder="register email" onChange={(event) => { setRegisterUsername(event.target.value) }} />
                <input className="form-control" placeholder="register password" onChange={(event) => { setRegisterPassword(event.target.value) }} />
                <button className="btn" id="register" onClick={register}>Sign up</button><br />
            </div>
        </div>
    )
}

export default Register;