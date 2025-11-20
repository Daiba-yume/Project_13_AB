import axios from "axios";
import { updateUserSuccess } from "../Slices/authSlices";

// URL du backend Render
const API_BASE_URL = "https://project-13-ab.onrender.com";
// Fonction pour mettre à jour le prénom et le nom de l'user
export const updateUserName = (firstName, lastName) => async (dispatch) => {
  try {
    // Récupération du token depuis le localStorage ou le sessionStorage
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    console.log("Token récupéré:", token);
    // Vérification si l'user est connecté (si le token est absent, on arrête la fonction)
    if (!token) {
      console.log("Utilisateur non connecté. Impossible de modifier le nom ");
      return;
    }
    // Envoi de la requête PUT pour mettre à jour les infos user
    const response = await axios.put(
      `${API_BASE_URL}/api/v1/user/profile`,
      {
        firstName,
        lastName,
      },
      { headers: { Authorization: `Bearer ${token}` } } // Ajout du token dans l'en-tête pour l'authentification
    );
    // Mise à jour de l'état Redux avec les new data user
    dispatch(updateUserSuccess(response.data.body));
    console.log("Nom mis à jour avec succès !");
  } catch (error) {
    // Gestion des erreurs
    console.error(
      "Erreur lors de la mise à jour du nom: ",
      error.response ? error.response.data : error.message
    );
    // Si le token est invalide ou expiré
    if (error.response && error.response.status === 401) {
      console.log("Le token a expiré ou l'utilisateur n'est pas autorisé");
    }
  }
};
