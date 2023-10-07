import { createSlice } from "@reduxjs/toolkit";


const msgSlice = createSlice({
  name: 'messages',
  initialState: {
    loading: false,
    messages: [

    ],
    mode: {
      bool: true,
      id: null,
    }
  },
  reducers: {
    msgRequest(state) {
      return {
        ...state,
        loading: true
      }
    },
    msgSuccess(state, action) {
      return {
        ...state,
        loading: false,
        messages: action.payload
      }
    },
    msgAdd(state, action) {
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload]
      }
    },
    
  
    changeMode(state, { payload }) {
      return {
        ...state,
        mode: payload
      }
    },
    msgFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
  }
})

const { actions, reducer } = msgSlice;

export const { msgFail, msgRequest, msgSuccess, msgAdd, changeMode, msgDelete,msgEdit } = actions;
export default reducer;