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
  // if (!userInfos(sessionStorage.token || localStorage.token)) {
  //   return;
  // }

  const storedToken =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  useEffect(() => {
    const loadUserProfile = async () => {
      if (!userInfos && storedToken) {
        try {
          const profileData = await userProfile(storedToken);
          dispatch(loginSuccess({ user: profileData, token: storedToken }));
        } catch (error) {
          console.error("Erreur lord du chargement du profil", error);
        }
      }
    };
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
