import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcAddImage } from "react-icons/fc";
import { BsFillPlayBtnFill,BsCardImage } from "react-icons/bs";
import { BiCalendarExclamation } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import Postmodule from './Postmodule';

 function Homesearch() {
  let{logUser}=useSelector((state)=>state.logUserManager);
  let[displayPostModule,setDisplayPostModule]=useState(false);
  let handlepost=()=>{
    setDisplayPostModule((state)=>!state);
  }
  return (
    <>
    <Createpostsection>
      <Createpostcontainer>
        <Createposttop>
            <Link to='' className='usrprofile'>
                <div>
                  <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=`)}/>
                 
                  </div></Link>
            <Link to='' className='postlink' onClick={handlepost}><span>Start a post</span></Link>
        </Createposttop>
        <Createpostul>
          <Createpostli>
            <Link to=''><i className='imageicon'><BsCardImage/></i><span>Photo</span></Link>
          </Createpostli>
          <Createpostli>
            <Link to=''><i className='videoicon'><BsFillPlayBtnFill/></i><span>Video</span></Link>
          </Createpostli>
          <Createpostli>
            <Link to=''><i className='eventicon'><BiCalendarExclamation/></i><span>Event</span></Link>
          </Createpostli>
          <Createpostli>
            <Link to=''><i className='articalicon'><RiArticleLine/></i><span>Write article</span></Link>
          </Createpostli>
        </Createpostul>
        
      </Createpostcontainer>
    
      </Createpostsection>
      <Postmodule displayPostModule={displayPostModule} setDisplayPostModule={setDisplayPostModule}/>
    </>
  )
}
const Createpostsection=styled.section`
@media (max-width:480px){
  display:none;
}
`;
const Createpostcontainer=styled.div`
width:100%;
height:120px;
background-color:white;
border-radius:10px;
padding:8px 20px;
border:1px solid rgba(0,0,0,0.2);

`;
const Createposttop=styled.div`
width:100%;
height:50px;
display:flex;

&>a{
    &>div{
        height:50px;
        width:50px;
        border-radius:50%;
        margin-right:10px;
        overflow:hidden;
        

        &>img{
            width:50px;
            height:50px;
            object-fit:cover;
            object-position:center;

        }
    }
    &.postlink{
        height:50px;
        width:90%;
        border-radius:25px;
        padding:0px 20px;
        text-decoration:none;
        display: flex;
        align-items: center;
        border:1px solid #00000099;
        transition:all 0.3s ease-in-out;
        &:hover{
          background-color:#DEDEDE;
          transition:all 0.3s ease-in-out;
        }
        &>span{
          font-size:0.9rem;
          color:#00000099;
          font-weight:600;
        }
    }
}
`;
const Createpostul=styled.ul`
list-style:none;
display:flex;
justify-content:space-between;
height:50px;

margin-top:5px;
`;
const Createpostli=styled.li`
&>a{
    text-decoration:none;
    padding:0px 8px;
    height:50px;
    display:flex;
    align-items:center;
    border-radius:5px;
    transition:all 0.3s ease-in-out;
    &:hover{
        background-color:#DEDEDE;
        transition:all 0.3s ease-in-out;
    }

    &>i{
        padding-right:10px;
        font-size:1.4rem;
        &.imageicon{
            color:#378ef9;
        }
        &.videoicon{
            color:#5f9b41;
        }
        &.eventicon{
            color:#c37d16;
        }
        &.articalicon{
            color:#e16745;
        }
    }
    &>span{
        font-size:0.85rem;
        color:#00000099;
        font-weight:600;
    }
}
`;
export default Homesearch;





