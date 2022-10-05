import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


const Nav = ({loggedIn, setLoggednIn}) => {
  
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
});
  
  
  
  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
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