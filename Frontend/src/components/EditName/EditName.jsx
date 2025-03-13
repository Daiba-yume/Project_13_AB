import { useState } from "react";
import "./EditName.scss";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../Redux/Actions/authPut";

const EditName = ({ currentFirstName, currentLastName, setIsEditing }) => {
  const [firstName, setFirstName] = useState(currentFirstName || "");
  const [lastName, setLastName] = useState(currentLastName || "");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserName(firstName, lastName));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="editInput">
        <div className="editButton">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <button className="save" type="submit">
            Save
          </button>
        </div>
        <div className="editButton">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <button className="cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditName;
