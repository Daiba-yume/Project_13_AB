import "./Login.scss";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser } from "../../Redux/Actions/authActions";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState(""); // État pour l'email
  const [password, setPassword] = useState(""); // État pour le mdp

  const dispatch = useDispatch(); // Accès à la fonction dispatch
  const { loading, error, userInfos } = useSelector((state) => state.auth); // Accès au state Redux

  // useNavigate pour la redirection
  const navigate = useNavigate();

  // Redirection vers le profil après une connexion réussie
  useEffect(() => {
    if (userInfos) {
      navigate("/profile");
    }
  }, [userInfos, navigate]); // Déclencher la redirection uniquement lorsque userInfos change

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password)); // Envoie la requête de connexion
  };
  return (
    <main className="main bg-dark">
      <section className="signInContent">
        <FaUserCircle className="signInIcon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Maj de l'email
              autoComplete="username"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Maj du mdp
              autoComplete="current-password"
            />
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="signInButton" disabled={loading}>
            {loading ? "Connexion..." : "Sign In"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Login;
