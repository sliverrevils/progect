import { createSlice } from "@reduxjs/toolkit";



export const testSlice = createSlice({
name:'test',
initialState:{
    count:0
},
reducers:{
    testAdd:(state,action)=>{state.count++}
}
})

export const {actions:{testAdd}} = testSlice