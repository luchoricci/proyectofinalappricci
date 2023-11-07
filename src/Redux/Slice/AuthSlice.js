import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "AuthSlice", 
    initialState:{
        User: null,
        IdToken: null,
    },

    reducers: {
        SetUser: (state, action) => {
            state.User = action.payload;
          },
          SetIdToken: (state, action) => {
            state.IdToken = action.payload;
          },
          ClearUser: (state) => {
            state.User = null
          },

    },

})

export const {SetIdToken, SetUser, ClearUser} = AuthSlice.actions;

export default AuthSlice.reducer;



