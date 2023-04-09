import { configureStore } from "@reduxjs/toolkit";
import logUserSlice from './reduxslic/signinslice';
import postSlice from "./reduxslic/postSlice";
import userinfoManager from "./reduxslic/userinfoSlice";

let store=configureStore({
    reducer:{
        logUserManager:logUserSlice,
        postManager:postSlice,
        userinfoManager:userinfoManager
    },
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // })
    // middleware: []
})

export default store;