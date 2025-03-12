import axios from "axios";
import { updateUserSuccess } from "../Slices/authSlices";

export const updateUserName = (firstName, lastName) => async (dispatch) => {
  try {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    console.log("Token récupéré:", token);
    if (!token) {
      console.log("Utilisateur non connecté. Impossible de modifier le nom ");
      return;
    }
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        firstName,
        lastName,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    dispatch(updateUserSuccess(response.data.body));
    console.log("Nom mis à jour avec succès !");
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du nom: ",
      error.response ? error.response.data : error.message
    );
    if (error.response && error.response.status === 401) {
      console.log("Le token a expiré ou l'utilisateur n'est pas autorisé");
    }
  }
};
