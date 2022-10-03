import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>login screen</h1>
            <Link to="/drink"><button>User Login</button></Link>
            <Link to="/order"><button>Host Login</button></Link>
        </div>
    )
}

export default Login