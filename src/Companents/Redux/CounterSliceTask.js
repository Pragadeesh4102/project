import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'api',
        initialState:{
            value: 'email'
        },
        reducers:{
            get:(state)=>{
                state.mail           
            }
        }
})