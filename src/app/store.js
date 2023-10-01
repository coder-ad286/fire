import { configureStore } from "@reduxjs/toolkit";
import msgReducer from './slicers/msgSlicer'
const store = configureStore({
    reducer:{
       messages : msgReducer
    },
    
})

export default store;