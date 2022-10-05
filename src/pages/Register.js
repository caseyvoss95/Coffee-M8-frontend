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
        <div>
            <input placeholder="register username" onChange={(event) => { setRegisterUsername(event.target.value) }} />
            <input placeholder="register password" onChange={(event) => { setRegisterPassword(event.target.value) }} />
            <button className="btn btn-sm" id="register" onClick={register}>register</button><br />
        </div>
    )
}

export default Register;