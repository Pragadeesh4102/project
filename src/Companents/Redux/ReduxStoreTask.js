import { configureStore  } from "@reduxjs/toolkit";
import CounterReducer from ' ./counterSlice' ;

export default configureStore({
    reducers:{
        api:CounterReducer
    }
})