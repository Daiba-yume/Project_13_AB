import { createSlice } from "@reduxjs/toolkit";

// État initial
const initialState = {
  token:
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken") ||
    null, // token d'auth
  userInfos: null, // infos sur l'utilisateur
  error: null,
};

// Slice de l'auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action pour la connexion réussie (stockage et mémorisation)
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.userInfos = action.payload.user;
      state.error = null;
      console.log("Token enregistré:", action.payload.token);
      localStorage.setItem("authToken", action.payload.token);
      sessionStorage.setItem("authToken", action.payload.token);
    },
    updateUserSuccess(state, action) {
      state.userInfos = action.payload;
    },
    logout(state) {
      state.token = null;
      state.userInfos = null;
      state.error = null;
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
  },
});

// Exportation des actions
export const { loginSuccess, updateUserSuccess, logout, loginFailure } =
  authSlice.actions;

export default authSlice.reducer;
