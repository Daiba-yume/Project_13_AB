import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlices";

// Configuration du store Redux avec le reducer
const store = configureStore({
  reducer: {
    auth: authReducer, // Ajout du reducer pour gérer l'état d'authentification
  },
});

export default store;
