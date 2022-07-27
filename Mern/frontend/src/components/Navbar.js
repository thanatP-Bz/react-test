import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
          {!user && (
            <div>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handlerLogout}>Log Out</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
