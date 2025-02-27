import axios from "axios";
import { loginRequest, loginSuccess, loginFailure } from "../Slices/authSlices";

// Fonction pour connecter l'user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    // Déclenche l'action pour signaler le début du processus de connexion
    dispatch(loginRequest());
    // Envoie la req de connexion avec l'email et le mdp
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email,
        password,
      }
    );
    // On récupère le token de la resp et on le stocke dans le localStorage
    const token = response.data.body.token;
    localStorage.setItem("token", token);

    // Envoie une req pour récup les data de profil de l'user
    const profileResponse = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: { Authorization: `Bearer ${token}` }, // add le token dans l'en-tête
      }
    );
    // Si la récupération est réussi, on met à jour le store
    dispatch(
      loginSuccess({
        user: profileResponse.data.body,
        token,
      })
    );
  } catch (error) {
    //En cas d'erreur
    console.error("Error details: ", error.response);
    dispatch(
      loginFailure(error.response?.data?.message || "Erreur de connexion")
    );
  }
};
