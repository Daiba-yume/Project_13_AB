import { useSelector } from "react-redux";
import Account from "../../components/Account/Account";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Profile.scss";
import { Navigate } from "react-router";

const Profile = () => {
  const { userInfos } = useSelector((state) => state.auth);
  // Récupération du token (session or local)
  const storedToken =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  if (!userInfos && !storedToken) {
    return <Navigate to="/login" />; // Redirection vers la page de login si l'user n'est pas authentifié
  }
  return (
    <div className="profile">
      <ProfileHeader />
      <Account />
    </div>
  );
};

export default Profile;
