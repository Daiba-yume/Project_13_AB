import { useSelector } from "react-redux";
import Account from "../../components/Account/Account";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Profile.scss";
import { Navigate } from "react-router";

const Profile = () => {
  // Récupération des infos user dpuis le store Redux
  const { userInfos } = useSelector((state) => state.auth);
  // Récupération du token (si stocké dans session or local)
  const storedToken =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (!userInfos && !storedToken) {
    return <Navigate to="/login" />; // Redirection vers la page de login si l'user n'est pas authentifié(pas de token pas d'infos)
  }
  return (
    <div className="profile">
      <ProfileHeader />
      <Account />
    </div>
  );
};

export default Profile;
