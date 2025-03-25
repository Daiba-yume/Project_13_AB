import { useDispatch, useSelector } from "react-redux";
import Account from "../../components/Account/Account";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Profile.scss";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { userProfile } from "../../Redux/Services/authService";
import { loginSuccess } from "../../Redux/Slices/authSlices";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfos } = useSelector((state) => state.auth);
  // Récupération du token (session or local)
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
