import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container">
            <h1>login screen</h1>
            <Link to="/drink"><button className="btn">User Login</button></Link>
            <Link to="/order"><button className="btn">Host Login</button></Link>
        </div>
    )
}

export default Login