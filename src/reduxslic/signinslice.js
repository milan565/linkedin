import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../configure/firebaseConfig";
import {  onAuthStateChanged } from "firebase/auth";
let initial={
    logUser:null
}
let logUserSlice=createSlice({
    name:'logUserManager',
    initialState:initial,
    reducers:{
        addLogUser:(state,action)=>{
            return({
                ...state,logUser:action.payload
            })
        }
    }
})

export default logUserSlice.reducer;
export let{addLogUser}=logUserSlice.actions;

// export function LogUserThunk(){
// return async (dispatch,getState)=>{
// try{
//     await onAuthStateChanged(auth,(currentuser)=>{

//     })
  
// }catch(err){
//     console.log(err);
// }
// }
// }