import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./Slice/FirstSlice";
import { ecApi } from"../Services/ecApi"
export const ReduxStore = configureStore({
    reducer: {firstSlice,
    [ecApi.reducerPath]: ecApi.reducer,
},
middleware: (getDefaultMiddleware) => 
getDefaultMiddleware().concat(ecApi.middleware),

});

