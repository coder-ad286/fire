import { createSlice } from "@reduxjs/toolkit";


const msgSlice = createSlice({
    name:'messages',
    initialState:{
        loading:false,
        messages : null
    },
    reducers:{
        msgRequest(){
            return {
                loading:true
            }
        },
        msgSuccess(state,action){
            return {
               loading:false,
               messages:action.payload
            }
        },
        msgFail(state,action){
            return {
               loading:false,
               error:action.payload
            }
        }
    }
})

const {actions,reducer} = msgSlice;

export const {msgFail,msgRequest,msgSuccess} = actions;
export default reducer;