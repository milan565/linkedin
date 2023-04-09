import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { auth } from "../configure/firebaseConfig";
import {  onAuthStateChanged } from "firebase/auth";
import { postThunk } from '../reduxslic/postSlice';
import { addLogUser } from '../reduxslic/signinslice';

export default function PreventRoute({children}) {
  let [user,setUser]=useState({});
  let dispatch=useDispatch();
  useEffect(()=>{
  let fetchUser=onAuthStateChanged(auth,(user)=>{
    setUser(user);
   let{displayName,email,photoURL,emailVerified}=user;
   let userInfo={displayName,
    email,
    photoURL,
    emailVerified};
   
    dispatch(addLogUser(userInfo));
  });
  dispatch(postThunk());
 
    
  fetchUser();
  },[])
  
  

    if(!user){
    return<Navigate to='/'/>
    }
  
  return children
    
  
}
