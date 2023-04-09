import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsInfoSquareFill,BsPlusLg,BsArrowRightShort } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
 
function Feedcomp() {
  return (
    <>
     <Feedsection>
        <Feedcontainer>
          <Feedtitle>
            <h5>Add to your feed</h5>
            <Link to=''><i><BsInfoSquareFill/></i></Link>
          </Feedtitle>
          <Feedul>
            <Feedli>
                <div className='connectionprofile'>
                <Link to=''>
                    <img src='https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'/>
                </Link>
                </div>
                <div className='connectioninfo'>
                <Link to=''>
                    <h4>Freshers Jobs & Internship Opportunity In Nepal</h4>
                    <p>Company • Human Resources</p>
                </Link>
                <Followbtn><i><BsPlusLg/></i><span>Follow</span></Followbtn>
                </div>
                
            </Feedli>
            <Feedli>
                <div className='connectionprofile'>
                <Link to=''>
                    <img src='https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuJTIwYmVpbmd8ZW58MHx8MHx8&w=1000&q=80'/>
                </Link>
                </div>
                <div className='connectioninfo'>
                <Link to=''>
                    <h4>Freshers Jobs & Internship Opportunity In Nepal</h4>
                    <p>Company • Human Resources</p>
                </Link>
                <Followbtn><i><BsPlusLg/></i><span>Follow</span></Followbtn>
                </div>
                
            </Feedli>
            <Feedli>
                <div className='connectionprofile'>
                <Link to=''>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12pkrJPnVL2ybKPJiIwZP5gDIkrUG99R20g&usqp=CAU'/>
                </Link>
                </div>
                <div className='connectioninfo'>
                <Link to=''>
                    <h4>Freshers Jobs & Internship Opportunity In Nepal</h4>
                    <p>Company • Human Resources</p>
                </Link>
                <Followbtn><i><BsPlusLg/></i><span>Follow</span></Followbtn>
                </div>
                
            </Feedli>
          </Feedul>
          <div className='moreconnection'>
          <Link to=''><span>View all recommendations </span><i><HiArrowRight/></i></Link>
          </div>
        
        </Feedcontainer>
     </Feedsection>
    </>
  )
}
const Feedsection=styled.section``;

const Feedcontainer=styled.div`
width:100%;
min-height:360px;
border-radius:10px;
background-color:white;
over-flow:hidden;
border:1px solid rgba(0,0,0,0.1);
padding:10px 15px 35px 15px;
margin-bottom:10px;
position:relative;
&>div{
    
    &.moreconnection{
        position:absolute;
        left:0;
        width:100%;
        buttom:0;
        padding-left:20px;
        &>a{
            font-size:0.9rem;
            color:rgba(0,0,0,0.6);
            font-weight:600;
            height:30px;
          
            width:200px;
            display:flex;
            aling-itmes:center;
            
            transition:all 0.3s ease-in-out;
            &:hover{
                background-color:#DEDEDE;
                transition:all 0.3s ease-in-out;
            }

            &>i{
                font-size:1.1rem;
                font-weight:700;
                padding-left:5px;
                
            }
        }
    }
    &>a{
        text-decoration:none;
    }
}
`;
const Feedtitle=styled.div`
display:flex;
justify-content:space-between;
&>h5{
    font-size:1rem;
    color:rgba(0,0,0,0.7);
    font-weight:700;
}
&>a{
    &>i{
        color:rgba(0,0,0,0.6);
        font-size:0.8rem;
    }
}

`;

const Feedul=styled.ul`
list-style:none;
width:100%;
min-height:250px;
margin-top:10px;

`;
const Feedli=styled.li`
width:100%;
min-height:80px;
display:flex;
margin-bottom:10px;


&>div{
    &>a{
        &>img{
            width:55px;
            height:55px;
            object-fit:cover;
            object-position:center;

        }
    }
    &.connectionprofile{
      height:54px;
      width:54px;
      border-radius:50%;
      overflow:hidden;
     
      
    }
    &.connectioninfo{
     width:70%;
     margin-left:10px;
   
     &>a{
        text-decoration:none;
        &>h4{
            font-size:0.9rem;
            font-weight:600;
            color:rgba(0,0,0,0.8);   
           
        }
        &>p{
            margin-top:5px;
            font-size:0.75rem;
            color:rgba(0,0,0,0.6);
        }
     }
    }
}
`;
const Followbtn=styled.button`
margin-top:10px;
padding:6px 16px;
border:1px solid rgba(0,0,0,0.6);
background-color:white;
border-radius:25px;
font-size:1rem;
font-weight:600;
color:#00000099;
cursor:pointer;
transition:all 0.3s ease-in-out;
&:hover{
    background-color:#DEDEDE;
    box-shadow:inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    transition:all 0.3s ease-in-out;
}
&>i{
    padding-right:5px;
    font-size:0.9rem;
    font-weight:700;
}
`;

export default Feedcomp;

