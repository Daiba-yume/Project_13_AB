import { NavLink } from "react-router";
import Logo from "../../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.auth.userInfos?.firstName);
  return (
    <nav className="header">
      <NavLink className="headerLogo" to="/">
        <img className="logo" src={Logo} alt="logo argentBank" />
      </NavLink>

      {!token ? (
        <NavLink className="logIn" to="/Login">
          <FaUserCircle className="signInIcon" />
          Sign In
        </NavLink>
      ) : (
        <div className="logOut">
          <NavLink className="userInfo" to="/profile">
            <FaUserCircle className="signOutIcon" />
            {firstName}
          </NavLink>
          <NavLink className="signOut" to="/login">
            <FaRightFromBracket />
            Sign Out
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
