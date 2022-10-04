import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";


const Nav = () => {
  const logout = async () => {
    await signOut(auth);
  }
  return (
    <nav className="navbar">
      Coffee-M8
      <Link to="/"><button className="btn btn-secondary"  >Home</button></Link>
      <button className="btn btn-danger btn-sm" id="logout" onClick={logout}>logout</button>
    </nav>
  )
}

export default Nav;