import { NavLink } from "react-router";
import Logo from "../../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <NavLink className="headerLogo" href="./index.html">
        <img className="logo" src={Logo} alt="logo argentBank" />
      </NavLink>
      <div>
        <NavLink className="logIn" href="./sign-in.html">
          <FaUserCircle className="signInIcon" />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
