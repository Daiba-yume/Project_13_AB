import { NavLink, useNavigate } from "react-router";
import Logo from "../../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../../Redux/Slices/authSlices";
import { useEffect } from "react";
import { userProfile } from "../../Redux/Actions/authPost";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Récupération du token et infos user depuis Redux
  const token = useSelector((state) => state.auth.token);
  const userInfos = useSelector((state) => state.auth.userInfos?.firstName);
  // Récupération du token ( si stocké dans session or local)
  const storedToken =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  useEffect(() => {
    // On charge les données user
    const loadUserProfile = async () => {
      // Si l'utilisateur n'a pas encore d'infos et qu'un token est présent
      if (!userInfos && storedToken) {
        try {
          // Récupére les données utilisateur avec le token
          const profileData = await userProfile(storedToken);
          // On save les données user et du token dans Redux
          dispatch(loginSuccess({ user: profileData, token: storedToken }));
        } catch (error) {
          console.error("Erreur lord du chargement du profil", error);
        }
      }
    };
    // Appel de la fonction pour charger les données
    loadUserProfile();
  }, [userInfos, storedToken, dispatch]);
  // Fonction de déconnexion
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    // Déclenche l'action Redux pour supprimer les infos utilisateur
    dispatch(logout());
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
            {userInfos}
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
