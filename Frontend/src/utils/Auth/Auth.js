// Authentification user
import axios from "axios";

export const LoginUser = (url) => {
  const userLogin = async (dataForm) => {
    try {
      const response = await axios.post(url, dataForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Erreur 400 : Mauvaise requête", error.response.data);
      } else {
        console.error("Erreur lors de l'authentification", error.message);
      }
      throw error;
    }
  };

  return userLogin;
};
