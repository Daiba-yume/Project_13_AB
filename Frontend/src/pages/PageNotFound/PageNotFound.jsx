import { Link } from "react-router-dom";
import "./PageNotFound.scss";
import notFoundImg from "../../assets/404.png";

const PageNotFound = () => {
  return (
    <section className="notFound">
      <img src={notFoundImg} alt="Page non trouvée" />
      <p className="error">
        Oups ! La page que vous demandez n&apos;existe pas
      </p>
      <Link to="/" className="link">
        Revenir sur la page d&apos;accueil
      </Link>
    </section>
  );
};

export default PageNotFound;
