import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./Slices/mainSlice";



export const store=configureStore({
    reducer:{[mainSlice.name]:mainSlice.reducer},
    devTools:process.env.NODE_ENV!=='production'
});

export type RootState = ReturnType<typeof store.getState>