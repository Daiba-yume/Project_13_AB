import { createSlice } from "@reduxjs/toolkit";

// État initial
const initialState = {
  token:
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken") ||
    null, // token d'auth
  userInfos: null, // stock les infos sur l'utilisateur
  error: null, // erreurs d'authentification
};

// Slice redux pour l'authentification
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action pour la connexion réussie (stockage et mémorisation)
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.userInfos = action.payload.user;
      state.error = null;
      localStorage.setItem("authToken", action.payload.token);
      sessionStorage.setItem("authToken", action.payload.token);
    },
    // Action pour l'update profile
    updateUserSuccess(state, action) {
      state.userInfos = action.payload;
    },
    // Action pour la déconnexion (suppression et réinitialisation)
    logout(state) {
      state.token = null;
      state.userInfos = null;
      state.error = null;
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    },
    // Action en cas d'échec de connexion
    loginFailure(state, action) {
      state.error = action.payload;
    },
  },
});

// Exportation des actions
export const { loginSuccess, updateUserSuccess, logout, loginFailure } =
  authSlice.actions;
// Exportation du reducer pour l'intégrer au store Redux
export default authSlice.reducer;
