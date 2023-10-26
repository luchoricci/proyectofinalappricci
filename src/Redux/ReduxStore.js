import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./Slice/FirstSlice";
import { ecApi } from"../Services/ecApi";
import AuthSlice from "./Slice/AuthSlice";


export const ReduxStore = configureStore({
    reducer: {firstSlice,
    [ecApi.reducerPath]: ecApi.reducer,
    AuthSlice,
},
middleware: (getDefaultMiddleware) => 
getDefaultMiddleware().concat(ecApi.middleware),

});

