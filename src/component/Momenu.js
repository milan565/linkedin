import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill,BsFilePlusFill,BsFillBagDashFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
 function Momenu() {
  return (
    <>
      <Momenucont>
        <Momenubox>
            <Link to='' className='active'>
                <ImHome3/>
                <span>Home</span>
            </Link>
            <Link to=''>
                <BsPeopleFill/>
                <span>My Network</span>
            </Link>
            <Link to=''>
                <BsFilePlusFill/>
                <span>Post</span>
            </Link>
            <Link to=''>
                <MdNotifications/>
                <span>Notifications</span>
            </Link>
            <Link to=''>
                <BsFillBagDashFill/>
                <span>Jobs</span>
            </Link>
           
        </Momenubox>
      </Momenucont>
    </>
  )
}
const Momenucont=styled.section`
width:100%;
height:53px;
border-top:1px solid rgba(0,0,0,0.4);
background-color:white;
position:fixed;
left:0;
bottom:0;
right:0;
padding:0px 16px;
@media (min-width:480.1px){
    display:none;
}
`;
const Momenubox=styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;

a{
    height:100%;
    display:inline-flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    color:rgba(0,0,0,0.7);
    text-decoration:none;
    &.active{
        color:black;
    }
   
    svg{
        width:26px;
        height:24px;
    }
    span{
        font-size:11px;
        line-height:1.3;
        font-weight:400;
    }
}
`;
export default Momenu;
