import Account from "../../components/Account/Account";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <Account />
    </div>
  );
};

export default Profile;
