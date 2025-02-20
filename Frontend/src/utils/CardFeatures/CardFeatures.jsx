import "./CardFeatures.scss";

const CardFeatures = ({ icon, title, text }) => {
  return (
    <div className="featuresCard">
      <img src={icon} alt={icon} className="imgCard" />
      <h1 className="titleCard">{title} </h1>
      <p>{text}</p>
    </div>
  );
};

export default CardFeatures;
