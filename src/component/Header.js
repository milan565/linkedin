import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill,BsBagDashFill,BsBellFill,BsFillCaretDownFill,BsThreeDots } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { CgMenuGridR } from "react-icons/cg";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { auth } from '../configure/firebaseConfig';
import {  signOut } from "firebase/auth";
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  let navigation=useNavigate();
  let{logUser}=useSelector((state)=>state.logUserManager);
  let[inputStatus,setInputStatus]=useState(false);
  let[dropuserprofilestate,setDropuserprofilestate]=useState(false);
  let[secondMenuState,SetSecondMenuState]=useState(false);
  let {userPersonalInfo}=useSelector((state)=>state.userinfoManager);
  let handlefocus=()=>{
    setInputStatus((inputStatus)=>!inputStatus)
  }
  let handleDropUserProfile=()=>{
    setDropuserprofilestate((state)=>!state);
  }
  let handleSecondMenu=()=>{
    SetSecondMenuState((state)=>!state); 
  }
  let handleSignOut=async()=>{
    try{
      await signOut(auth);
      navigation("/");

    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
     <Headersection>
      <Container>
        <Logosection>
          <Logo href='/feed'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt='header logo image'/>
          </Logo>
          
          <Searchbox className={`${inputStatus===true?("onfocusinput"):null}`}>
           <Searchicon><FaSearch/></Searchicon>
           <Input type='search' placeholder='search' onFocus={handlefocus} onBlur={handlefocus}/>
          </Searchbox>
        </Logosection>
        <Menusection>
          <Navbar className='userprofile'>
            <Navitem className='searchlink'>
              <Link to=''><FaSearch/><Spanmenu>Search</Spanmenu></Link>
            </Navitem>
            <Navitem className='activeitem '>
              <Link to='/feed' ><ImHome3/><Spanmenu>Home</Spanmenu></Link>
            </Navitem>
            <Navitem>
              <Link to='/mynetwork'><BsPeopleFill/><Spanmenu>My Network</Spanmenu></Link>
            </Navitem>
            <Navitem>
              <Link to='/jobs'><BsBagDashFill/><Spanmenu>Jobs</Spanmenu></Link>
            </Navitem>
            <Navitem>
              <Link to='/messaging'><TbMessageCircle/><Spanmenu>Messaging</Spanmenu></Link>
            </Navitem>
            <Navitem>
              <Link to='/notification'><BsBellFill/><Spanmenu>Notification</Spanmenu></Link>
            </Navitem>
            <Navitem className='profileParentlLink'>
              <Link to='' onClick={handleDropUserProfile}>
                <div>
                  <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=`)}/>
                </div>
              <Spanmenu>Me<BsFillCaretDownFill/></Spanmenu></Link>
              <Dropuserprofileul className={`${dropuserprofilestate!==true?("dropuserprofileulnone"):null}`}>
                <Dropuser>
                  <Link to='' className='usrprofilelink'>
                    <Userporfilebox>
                    <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=`)}/>
                     
                      </Userporfilebox>
                    <Userinfo>
                      <h4>{(logUser?.displayName)?(logUser?.displayName):(`${userPersonalInfo?.fname} ${userPersonalInfo?.lname}`)}</h4>
                      {/* <p>Student at kathmandu collage of technology</p> */}
                    </Userinfo>
                  </Link>
                  <Link to='' className='viewprofilelink'><span>View Profile</span></Link>
                </Dropuser>
                <Dropinnerul>
                  <h3>Account</h3>
                  <Dropinnerli>
                    <Link to='' className='innerpremimum'><i><RiCheckboxBlankFill/></i><span>Try Premium for free</span></Link>
                  </Dropinnerli>
                  <Dropinnerli>
                    <Link to=''><span>Settings & Privacy</span></Link>
                  </Dropinnerli>
                  <Dropinnerli>
                    <Link to=''><span>Help</span></Link>
                  </Dropinnerli>
                  <Dropinnerli>
                    <Link to=''><span>Language</span></Link>
                  </Dropinnerli>
                </Dropinnerul>
                <Dropinnerul>
                  <h3>Manage</h3>
                  <Dropinnerli>
                    <Link to=''><span>Posts & Activity</span></Link>
                  </Dropinnerli>
                  <Dropinnerli>
                    <Link to=''><span>Job Posting Account</span></Link>
                  </Dropinnerli>

                </Dropinnerul>
                <Link to ='' className='innersigninlink' onClick={handleSignOut}><span>Sign Out</span></Link>
              </Dropuserprofileul>
            </Navitem>
            <Navitem className='dotclass'>
              <Link to='' onClick={handleSecondMenu}><BsThreeDots/></Link>
            </Navitem>
          </Navbar>
          <Navbar className={`optionalnavbar ${secondMenuState!==false?("secondmenudisplay"):null}`}>
          <Navitem>
              <Link to=''><CgMenuGridR/><Spanmenu>Work<BsFillCaretDownFill/></Spanmenu></Link>
            </Navitem>
            <Navitem >
              <Link to='' className='premimumlink'>Try Premium for free</Link>
            </Navitem>
          </Navbar>
        </Menusection>
      </Container>
     </Headersection>
    </>
  )
}
const Headersection=styled.div`
background-color:white;
height:53px;
width:100%;
z-index:999;
position:fixed;
border-bottom:1px solid rgba(0,0,0,0.1);

@media (max-width:480px){
  display:none;
  hegith:0px;
}
`;
const Container=styled.div`
max-width:1128px;
margin:0px auto;
height:100%;
display:flex;
justify-content:space-between;

@media(max-width:1100px){
  padding:0px 20px;
}
@media(max-width:567px){
  padding:0px 15px;
}
`;

const Logosection=styled.div`
width:30%;
height:90%;
display: flex;
align-items:center;


@media(max-width:992px){
  width:50px;
}
`;
const Logo=styled.a`
height:35px;
width:35px;
&>img{
  height:35px;
  width:35px;
}
`;
export const Searchbox=styled.div`
margin-left: 10px;
height:35px;
width:250px;
background-color:#eef3f8;
border-radius:5px;


&.onfocusinput{
  width:400px;
  border:2px solid black;
  transition:width 0.5s linear;
}
@media(max-width:992px){
  display:none;
}
`;
export const Searchicon=styled.span`
height:100%;
aling-items:center;
padding:0px 5px 0px 15px;
color:rgba(0,0,0,0.7);
font-weight:300;
font-size:0.8rem;
`;
export const Input=styled.input`
width:80%;
height:100%;
background-color:#eef3f8;
border:none;
outline:none;
font-size:1rem;
padding:0px 5px;
font-weight:300;
`;
// const Hidesearchicon=styled.button`
// background-color:transparent;
// border:none;
// outline:none;
// font-size:1.2rem;
// color:rgba(0,0,0,0.7);
// font-weight:600;
// `;

const Menusection=styled.div`

width:70%;
display:flex;
justify-content:flex-end;


@media(max-width:992px){
  width:96%;
  justify-content:flex-start; 
}
@media(max-width:567px){
  position:relative;
}
`;
const Navbar=styled.ul`
list-style:none;
display:flex;
&.userprofile{
  position:relative;
  &:before{
    content:"";
    position:absolute;
    top:0;
    right:0;
    height:100%;
    border-right:1px solid rgba(0,0,0,0.5);
    @media(max-width:567px){
      height:0%
    }
  }
}
&.optionalnavbar{
  margin-left:10px;
  @media(max-width:567px){
    display:none;
    position:absolute;
    margin:0px;
    padding:5px 0px ;
    width:180px;
    right:2%;
    top:110%;
    background-color:white;
    border-radius:8px 0px 8px 8px;
    box-shadow:0px 1px 10px -5px rgba(0,0,0,0.8);

    &.secondmenudisplay{
     display:flex;
    }
  }
}

`;
const Navitem=styled.li`

display:flex;
align-items:center;
padding:5px 0px;
&.activeitem{
  border-bottom:2px solid black;
  @media(max-width:860px){
    border-bottom:none;
  }
}
&.searchlink{
  display:none;
  &>a{
    font-size:1.2rem;
  }
  @media(max-width:992px){
    display:flex;
    
  }
}
&.dotclass{
  display:none;
  @media(max-width:567px){
    display:block;
  }
}
@media(max-width:860px){
  margin:0px 10px;
}
@media(max-width:768px){
  margin:0px 0px;
}

&>a{
  text-decoration:none;
  height:45px;
  padding:0px 15px;
  font-size:1.4rem;
  font-width:700;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color:rgba(0,0,0,0.7);
  transition:all 0.5s easy-in-out;
  &>div{
    width:27px;
    height:27px;
   
    border-radius:50%;
    overflow:hidden;
    &>img{
      width:30px;
      height:30px;

    }
  }
  @media(max-width:768px){
    padding:0px 15px;
  }
  &:hover,&:active{
    color:rgba(0,0,0,1);
    transition:all 0.5s easy-in-out;
  }
  &.premimumlink{
    text-align: center;
    color:#915907;
    font-size:0.8rem;
    text-decoration: underline;
    width:100px;
    padding:0px 0px;
    
  
  }
}
&.profileParentlLink{
  position:relative;
 
 
}
`;
const Spanmenu=styled.span`
font-size:0.75rem;
display:block;
@media(max-width:860px){
  display:none;
}
`;
const Dropuserprofileul=styled.ul`
   position:absolute;
    width:280px;
    min-height:380px;
    box-shadow:0px 1px 10px -5px rgba(0,0,0,0.8);
    right:0;
    top:110%;
    border-radius:8px 0px 8px 8px;
    background-color:white;
    display:flex;
    flex-direction:column;
    z-index:99;
    

    &.dropuserprofileulnone{
      display:none;
    }
    &>a{
      &.innersigninlink{
        line-height:30px;
        font-size:0.9rem;
        font-weight:400;
        color:rgba(0,0,0,0.6);
        display:block;
        border-top:1px solid rgba(0,0,0,0.1);
        padding:0px 10px;
        text-decoration:none;

        &:hover{
          text-decoration:underline;
        }
      }
    }
    `;
const Dropuser=styled.div`
height:25%;
width:90%;
padding:10px;

&>a{
  text-decoration:none;
  &.usrprofilelink{
    display:flex;
     color:rgba(0,0,0,0.8);
  }
  &.viewprofilelink{
    display:block;
    border:1px solid #0A66c2;
    margin-top:5px;
    text-align:center;
    border-radius:25px;
    font-size:0.9rem;
    line-height:23px;
    &>span{
      font-weight:600;
      color:#0A66c2;
    }
    &:hover{
      box-shadow:inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%); 
      transition:all 0.3s easy-in-out;
    }
  }
}


`;
const Userporfilebox=styled.div`
height:54px;
width:54px;
border-radius:50%;
overflow:hidden;
&>img{
  width:54px;
  height:54px;
  object-position:center;
  object-fit:cover;
}
`;
const Userinfo=styled.div`
padding:0px 10px;
display:flex;
justify-content:flex-start;
flex-direction:column;
&>h4{
  font-size:1rem;
  color:rgba(0,0,0,0.8);
  font-weight:600;
  margin:0px;
 
}
&>p{
  margin:0px;
  font-size:0.85rem;
  font-weight:600;
  font-color:rgba(0,0,0,0.7); 
}
`;
const Dropinnerul=styled.ul`
list-style:none;
padding:10px 10px;
border-top:1px solid rgba(0,0,0,0.1);

&>h3{
  font-size:1rem;
  font-weight:600;
  color:rgba(0,0,0,0.8);
  padding-bottom:5px;
}
`;
const Dropinnerli=styled.li`


&>a{
  text-decoration:none;
  color:rgba(0,0,0,0.7);
  font-weight:400;
  line-height:25px;
  font-size:0.9rem;
  &:hover{
    text-decoration:underline;
  }
 
  &.innerpremimum{
    font-size:0.9rem;
    color:rgba(0,0,0,0.6);
    font-weight:600;
    &:hover{
      color:#0A66c2;
    }
    &>i{
      padding-right:3px;
      color:rgb(218,165,32);
    }
  }
}
`;

export default Header;
