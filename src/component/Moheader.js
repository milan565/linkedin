import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FaSearch } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";

 function Moheader() {
    let{logUser}=useSelector((state)=>state.logUserManager);
    let[inputStatus,setInputStatus]=useState(false);
    let handlefocus=()=>{
        setInputStatus((inputStatus)=>!inputStatus)
      }
  return (
    <>
      <Mocontainer>
        <Mobox>
            <Moinnbox>
                <Moheuser>
                    <Link to=''>
                        <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://static.licdn.com/sc/h/3h0vrtch1zepjr4p54aja8i9x`)} alt='user profile'/>
                    </Link>
                </Moheuser>
                <Mohesearch>
                  <Mosearchbox className={`${inputStatus===true?("onfocusinput"):null}`}>
                    <Mosearchicon>
                        <FaSearch/>
                    </Mosearchicon>
                    <Mosearchinput>
                        <input type='search' placeholder='search' onFocus={handlefocus} onBlur={handlefocus}/>
                    </Mosearchinput>
                  </Mosearchbox>
                </Mohesearch>
                <Mohemessage>
                    <BiMessageRoundedDots/>
                </Mohemessage>
            </Moinnbox>
        </Mobox>
      </Mocontainer>
    </>
  )
}
const Mocontainer=styled.section`
@media (min-width:480.1px){
    display:none;
}
width:100%;
height:53px;
background-color:white;
position:fixed;
top:0px;
z-index:999;
left:0;
right:0;
padding:0px 16px;
box-shadow:0px 0px 10px -5px rgba(0,0,0,0.5);

`;
const Mobox=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;

`;
const Moinnbox=styled.div`
width:100%;
height:36px;
display:flex;
justify:content:space-between;

`;
const Moheuser=styled.div`
height:100%;
width:36px;

a{
    width:inherite;
    height:inherit;
    img{
        width:inherite;
        height:inherit;
        border-radius:50%;
    }
}
`;
const Mohesearch=styled.div`
height:100%;
width:100%;
margin:0px 20px;


`;
const Mosearchbox=styled.div`
width:100%;
height:100%;
background-color:#eef3f8;
padding:0px 5px;
display:flex;
align-items:center;
&.onfocusinput{
    
    border:1px solid black;
   
  }
`;
const Mosearchicon=styled.div`
&.svg{
    width:24px;
    height:24px;
    color:rgba(0,0,0,0.7);
}
`;
const Mosearchinput=styled.div`
width:100%;
height:100%;

input{
    width:100%;
    height:100%;
    background-color:transparent;
    border:none;
    padding-left:10px;
    font-size:18px;
    outline:none;
}`;
const Mohemessage=styled.div`
width:38px;
height:100%;
display:flex;
align-items:center;
font-size:20px;
&>svg{
    width:20px;
    height:20px;
}

`;
export default Moheader;