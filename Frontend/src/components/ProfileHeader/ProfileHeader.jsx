import { useSelector } from "react-redux";
import "./ProfileHeader.scss";
import { useState } from "react";
import EditName from "../EditName/EditName";

const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  //On récupère les infos user dpuis le store Redux
  const userInfos = useSelector((state) => state.auth.userInfos);
  // Sécurisation des valeurs pour éviter les erreurs si userInfos est null
  const firstName = userInfos?.firstName || "";
  const lastName = userInfos?.lastName || "";
  // Fonction appelée au clic pour "Edit Name"
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="headerProfile">
      <h1>
        Welcome back
        <br />
        {!isEditing ? `${firstName} ${lastName} !` : ""}
      </h1>
      {!isEditing ? (
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      ) : (
        <EditName
          currentFirstName={firstName}
          currentLastName={lastName}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default ProfileHeader;
