import { createSlice } from "@reduxjs/toolkit";
import {  getDocs } from "firebase/firestore"; 
import { firecoll} from '../configure/firebaseConfig';
import { createAsyncThunk } from "@reduxjs/toolkit";

let initial={
    allPost:[]
}
let postSlice=createSlice({
    name:"postManager",
    initialState:initial,
    reducers:{
     addPost:(state,action)=>{
        return({
            ...state,allPost:[...action.payload]
        })
     }
    }
   
})
export let{addPost}=postSlice.actions;
export default postSlice.reducer;



export function postThunk(){
    return async function (dispatch,getState){
        let postList=[];
        try{
            let fetchPost=await getDocs(firecoll);
            fetchPost.forEach((doc)=>{
             postList.push({id:doc.id,...doc.data()})
            })
            
            
        }catch(err){
            console.log(err);
        }
        dispatch(addPost([...postList]))
    }
}