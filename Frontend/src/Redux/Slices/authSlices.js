import { createSlice } from "@reduxjs/toolkit";
// État initial de l'auth
const initialState = {
  user: null, //user co
  token: null, //token d'auth
  userInfos: null, //info sur l'user
  loading: false, // indicateur de chargement
  error: null, // erreur de co
};
//Slice de l'auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true; // Maj du chargement
      state.error = null; // Réinitialisation de l'erreur
    },
    // Action en cas de succès (stockage et mémorisation)
    loginSuccess(state, action) {
      state.loading = false; // arrêt du charg
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.userInfos = action.payload.user;
      state.error = null;
      console.log("User data stored in Redux:", action.payload.user);
    },
    // Action en cas d'échec
    loginFailure(state, action) {
      state.loading = false; // arrêt du charg
      state.error = action.payload;
    },
    // Action pour déco l'user ( réinitialisation et suppression)
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      state.userInfos = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
