import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import Header from './Header';
import Homesearch from './Homesearch';
import Userprofile from './Userprofile';
import Feedcomp from './Feedcomp';
import Addcom from './Addcom';
import Postcom from './Postcom';
import Fotter from './Fotter';
import Loading from './Loading';
import { useDispatch,useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore"; 
import db from '../configure/firebaseConfig';
import { adduserinfo } from '../reduxslic/userinfoSlice';
import { Homesection,Container,Containerbox,Leftbox,Midbox,Rightbox } from '../stylecomponent/pagestyle';
import Userlefteventsection from './Userlefteventsection';
import Moheader from './Moheader';
import Momenu from './Momenu';


 function Home() {
  let [show,setShow]=useState(false);

  let dispatch=useDispatch();
 
  let{logUser}=useSelector((state)=>state.logUserManager);

  



useEffect(()=>{
  setTimeout(()=>{
    setShow(true);
  },1000)
},[])
 useEffect(()=>{
  let fetchUserInfo=async()=>{
    try{
     let userdata=await getDoc(doc(db,'users',logUser?.uid));
     let data=userdata.data();
     dispatch(adduserinfo(data))
     
    }catch(err){
      console.log(err);
    }
  }
   if(!logUser?.emailVerified){
    fetchUserInfo();
    
   }
 },[])

  return (<>
    {
      (show)?(   
    <Pagewrapper>
      <Header/>
      <Homesection>
        <Container>
          
          <Containerbox>
          <Leftbox>
            <Userprofile/>
             <Userlefteventsection/>
          </Leftbox>
          <Midbox>
            <Homesearch/>
            <Moheader/>
             <Postcom />
            <Momenu/>
          </Midbox>
          </Containerbox>
        
          <Rightbox>
            <Feedcomp/>
            <Addcom/>
          </Rightbox>
        </Container>
      </Homesection>
      <Fotter/>
      </Pagewrapper>):(<Loading/> )
    } 
     </>
    )
}
const Pagewrapper=styled.section``;
export default Home;