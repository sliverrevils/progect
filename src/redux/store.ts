import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./Slices/mainSlice";
import { testSlice } from "./Slices/testSlice";



export const store=configureStore({
    reducer:{
        [mainSlice.name]:mainSlice.reducer,
        [testSlice.name]:testSlice.reducer,
    },
    devTools:process.env.NODE_ENV!=='production'
});

export type ReduxStateT = ReturnType<typeof store.getState>