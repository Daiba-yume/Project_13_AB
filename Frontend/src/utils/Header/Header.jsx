import { NavLink, useNavigate } from "react-router";
import Logo from "../../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slices/authSlices";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.auth.userInfos?.firstName);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout()); // déco via redux
    navigate("/login");
    console.log("Vous avez été déconnecté avec succès !");
  };
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
          <NavLink className="signOut" onClick={handleLogout}>
            <FaRightFromBracket />
            Sign Out
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
