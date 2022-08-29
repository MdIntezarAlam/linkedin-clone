import userReducer from "../features/userSlice";
import { configureStore } from "@reduxjs/toolkit";
//store ko configure karna ke leye configureStore ko import kre

export  const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
