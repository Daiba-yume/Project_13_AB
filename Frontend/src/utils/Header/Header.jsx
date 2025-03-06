import { NavLink } from "react-router";
import Logo from "../../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <NavLink className="headerLogo" to="/">
        <img className="logo" src={Logo} alt="logo argentBank" />
      </NavLink>
      <div>
        <NavLink className="logIn" to="/Login">
          <FaUserCircle className="signInIcon" />
          Sign In
        </NavLink>
      </div>
      {/* logout à faire */}
      <div className="logout">
        <NavLink className="signOut">
          <FaRightFromBracket />
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
