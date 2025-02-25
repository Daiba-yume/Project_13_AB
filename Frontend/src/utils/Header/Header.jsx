import { NavLink } from "react-router";
import Logo from "../../assets/argentBankLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <NavLink className="headerLogo" href="./index.html">
        <img className="logo" src={Logo} alt="logo argentBank" />
      </NavLink>
      <div>
        <NavLink className="logIn" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
