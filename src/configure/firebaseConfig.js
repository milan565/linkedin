import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1ly0jwbOG6qjNY3PUxLRUw-4SCh18DEw",
    authDomain: "linkedin-75f0a.firebaseapp.com",
    projectId: "linkedin-75f0a",
    storageBucket: "linkedin-75f0a.appspot.com",
    messagingSenderId: "530855139032",
    appId: "1:530855139032:web:266a8634322c23785429ad"
  };

const firebaseApp=initializeApp(firebaseConfig);
const fireProvider=new GoogleAuthProvider(firebaseApp);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp);
const store=getStorage(firebaseApp);
const firecoll=collection(db,"post");
// const usercoll=collection(db,'users');

export {auth,store,fireProvider,firecoll};
export default db;