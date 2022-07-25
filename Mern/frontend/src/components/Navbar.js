import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handlerLogout = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>WorkOut</h3>
        </Link>
        <nav>
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <button onClick={handlerLogout}>Log Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
