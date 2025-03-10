import axios from "axios";
import { loginSuccess } from "../Slices/authSlices";

// Fonction pour connecter l'user
export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  try {
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

    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

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
    console.log(error.response?.data?.message || "Erreur de connexion");
  }
};
