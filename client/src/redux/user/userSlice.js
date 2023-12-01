import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    loading : false,
    error : ''
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        signInStart : (state) =>{
            state.loading = true
        },
        signInSuccess : (state, action) =>{
            state.currentUser = action.payload,
            state.loading = false
            state.error = ''
        },
        signInFailure : (state, action) =>{
            state.loading = false
            state.error = action.payload
        },
        signInprogress : (state, action) =>{
            state.error = action.payload
        }
    }
})

export const {signInStart, signInSuccess, signInFailure, signInprogress} = userSlice.actions
export default userSlice.reducer