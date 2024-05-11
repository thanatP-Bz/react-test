import "./navbar.scss";
import { FaInstagram, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <h1>Thanat Dev</h1>
        </div>

        <div className="socials">
          <FaInstagram />
          <FaFacebookSquare />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
