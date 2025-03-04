import { useSelector } from "react-redux";
import "./ProfileHeader.scss";

const ProfileHeader = () => {
  //On récupère les infos user dpuis Redux
  const { firstName, lastName } = useSelector(
    (state) => state.auth.userInfos || {} // si aucune data retourne un obj vide
  );

  return (
    <div className="headerProfile">
      <h1>
        Welcome back
        <br />
        {/* Affiche le prénom et le nom si disponibles, sinon affiche 'Unknown' */}
        {firstName && lastName ? `${firstName} ${lastName}` : "Unknown"} !
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default ProfileHeader;
