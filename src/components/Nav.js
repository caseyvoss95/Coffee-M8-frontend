import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


const Nav = () => {
  
  const [user, setUser] = useState({})

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
      Coffee-M8
      <Link to="/"><button className="btn btn-secondary"  >Home</button></Link>
      {user?.email}
      <button className="btn btn-danger btn-sm" id="logout" onClick={logout}>logout</button>
      
    </nav>
  )
}

export default Nav;