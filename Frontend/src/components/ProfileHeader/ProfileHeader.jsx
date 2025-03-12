import { useSelector } from "react-redux";
import "./ProfileHeader.scss";
import { useState } from "react";
import EditName from "../EditName/EditName";

const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  //On récupère les infos user dpuis Redux
  const { firstName, lastName } = useSelector(
    (state) => state.auth.userInfos || {} // si aucune data retourne un obj vide
  );
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
