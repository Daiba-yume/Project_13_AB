import "./Login.scss";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser } from "../../Redux/Services/authService";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState(""); // État pour l'email
  const [password, setPassword] = useState(""); // État pour le mdp
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch(); // Accès à la fonction dispatch
  const { loading, error, userInfos } = useSelector((state) => state.auth); // Accès au state Redux

  // useNavigate pour la redirection
  const navigate = useNavigate();

  // Redirection vers le profil après une connexion réussie
  useEffect(() => {
    if (userInfos) {
      navigate("/profile");
    }
    if (error) {
      setLoginError("L'email ou le mot de passe est incorrect");
    }
  }, [userInfos, navigate, error]); // Déclencher la redirection uniquement lorsque userInfos change

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    dispatch(loginUser(email, password, rememberMe)); // Envoie la requête de connexion
  };
  return (
    <main className="main bg-dark">
      <section className="signInContent">
        <FaUserCircle className="signInIcon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label className="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Maj de l'email
              autoComplete="username"
              required
            />
          </div>
          <div className="inputWrapper">
            <label className="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Maj du mdp
              autoComplete="current-password"
              required
            />
          </div>
          {loginError && <p className="error">{loginError} </p>}
          <div className="inputRemember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="remember-me">Remember me</label>
          </div>
          <button type="submit" className="signInButton" disabled={loading}>
            {loading ? "Connexion..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
