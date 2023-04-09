import { createSlice } from "@reduxjs/toolkit";
let initialUser={
    userPersonalInfo:[]
}
let userinfoSlice=createSlice({
    name:"userinfoManager",
    initialState:initialUser,
    reducers:{
        adduserinfo:(state,action)=>{
            return({
                ...state,userPersonalInfo:action.payload
            })
        }
    }
})
export default userinfoSlice.reducer;
export let {adduserinfo}=userinfoSlice.actions;
