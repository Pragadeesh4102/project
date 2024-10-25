import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        reset:(state)=>{
            state.value = 0
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementByUser:(state,action)=>{
            state.value += action.payload
        },
        decrementByUser:(state,action)=>{
            state.value -= action.payload
        }
    }
})

export const {increment,incrementByUser,decrement,decrementByUser,reset} = counterSlice.actions;

export default counterSlice.reducer;