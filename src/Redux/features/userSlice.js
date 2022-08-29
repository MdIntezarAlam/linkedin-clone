import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  //defining reducere
  //reducere for login
  reducers: {
    // reducer function for LOGIN
    loginuser: (state, action) => {
      state.user = action.payload;
    },
    // reducer function for LOGOUT
    logoutuser: (state) => {
      state.user = null;
    },
  },
});

//export the functio  login logout with desctructuring
export const { loginuser, logoutuser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer; //i am importing this name in store userReducere

//1=> create action file like userSlice we can put any name
//2=> create store file and import reducer
//3=>use in index.js file .provider and value = store provider will provide eveything in all the components
//4=> now i can use in any file using useSelector hooks and inside pass selectUser function
