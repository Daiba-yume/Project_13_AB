import { loginRequest, userProfile } from "../Services/authService";
import { loginSuccess } from "../Slices/authSlices";

// Fonction pour connecter l'user
export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  try {
    // Requête de connexion pour obtenir le token
    const token = await loginRequest(email, password);
    // Save le token dans le storage (localStorage ou sessionStorage) en fonction de l'option "rememberMe"
    if (rememberMe) {
      localStorage.setItem("token", token);
      console.log("Token enregistére dans le localStorage");
    } else {
      sessionStorage.setItem("token", token);
      console.log("Token enregistére dans le sessionStorage");
    }

    // On utilise le token pour récupérer le profil de l'utilisateur
    const profileResponse = await userProfile(token);
    console.log("Profil récupéré avec succés");

    // Si la récupération est réussi, on met à jour le store avec les infos
    dispatch(
      loginSuccess({
        user: profileResponse,
        token,
      })
    );
  } catch (error) {
    //En cas d'erreur
    console.error("Error details: ", error.response);
    console.log(error.response?.data?.message || "Erreur de connexion");
  }
};
