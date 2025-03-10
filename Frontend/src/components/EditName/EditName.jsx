const EditName = () => {
  return (
    <form>
      <div className="editInput">
        <input />
        <input />
      </div>
      <div className="editButton">
        <button className="save" type="submit">
          Save
        </button>
        <button className="cancel" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
