import "./ProfileHeader.scss";

const ProfileHeader = () => {
  return (
    <div className="headerProfile">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default ProfileHeader;
