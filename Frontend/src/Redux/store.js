import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlices";

// Configuration du store Redux avec le reducer
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
