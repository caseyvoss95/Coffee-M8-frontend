import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


const Nav = ({ user, setUser }) => {


  const history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    history.push('/');
  }

  return (
    <nav className="navbar">
      <Link to="/"><img src="https://i.imgur.com/cwGYR3k.png" id="logo" /></Link>

      <nav className="navbar navbar-expand-sm">
        <button className="navbar-toggler" type="button">
        <Link to="/register"><button className="btn btn-secondary btn-sm">User Registration</button></Link>
        <button className="btn btn-danger btn-sm" id="logout" onClick={logout}>Logout</button>
      </button>
      </nav>
    </nav>
  )
}

export default Nav;