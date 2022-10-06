import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Nav, Navbar } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

const Navi = ({ user, setUser }) => {

  // const history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    // history.push('/');
  }

  return (
    // <nav className="navbar">
    //   <Link to="/"><img src="https://i.imgur.com/cwGYR3k.png" id="logo" /></Link>

    //     <Link to="/register"><button className="btn btn-secondary btn-sm">User Registration</button></Link>
    //     <button className="btn btn-danger btn-sm" id="logout" onClick={logout}>Logout</button>
    // </nav>

    <Navbar expand="lg" >
      <Link to="/"><img src="https://i.imgur.com/cwGYR3k.png" id="logo" alt="Coffee M8" /></Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </Nav>
        <Nav>
          <Link to="/" onClick={logout}>Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Navi;