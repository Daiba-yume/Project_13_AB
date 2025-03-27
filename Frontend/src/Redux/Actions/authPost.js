import axios from "axios";
// Fonction pour effectuer la requête de connexion et obtenir le token
export const loginRequest = async (email, password) => {
  // Envoie de la requête POST à l'API
  const response = await axios.post("http://localhost:3001/api/v1/user/login", {
    email,
    password,
  });
  return response.data.body.token; // Retourne le token d'authentification
};
// Fonction pour récupérer les informations du profil utilisateur dpuis l'API
export const userProfile = async (token) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    {
      headers: { Authorization: `Bearer ${token}` }, // Envoie le token dans les headers pour l'authentification
    }
  );
  return response.data.body; // Retourne les informations du profil utilisateur
};
