import { createSlice } from "@reduxjs/toolkit";

// État initial
const initialState = {
  token: null, // token d'auth
  userInfos: null, // infos sur l'utilisateur
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
    },
  },
});

// Exportation des actions
export const { loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
