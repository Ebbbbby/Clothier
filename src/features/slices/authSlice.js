import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
 name:'auth',
 initialState:{
    user:{
        name:'',
        password:'',
        image:'',
        authUser:false,
    },
 },
 reducers:{
    login(state, action){
        
    },
    logout(state){},



 }
})
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;