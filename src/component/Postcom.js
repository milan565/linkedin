import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillCaretDownFill} from "react-icons/bs";
import { useSelector } from "react-redux";
import Singlepost from './Singlepost';

 function Postcom() {
   let {allPost}=useSelector((state)=>state.postManager);
  let [sortState,setSortState]=useState(false);
   let[ownPost,setOwnPost]=useState(null);
 
  let handlesortbox=()=>{
    setSortState((state)=>!state)
  }
 
 
  return (
    <>
      <Postsection>
        <Postsortcontainer>
          <Link to='' onClick={handlesortbox}>
            <div className='sortline'></div>
            <div className='sortdiv'>
            <span>Sort by :</span><h4>Recent<i><BsFillCaretDownFill/></i></h4>
            <Sortul className={`${sortState===false?("sortboxnon"):null}`}>
              <Sortli><Link to=''>Top</Link></Sortli>
              <Sortli><Link to=''>Recent</Link></Sortli>
            </Sortul>
            </div>
           
            </Link>
        </Postsortcontainer>
        {
          allPost.map((item)=>{
            return <Singlepost post={item} postOpt={ownPost} postOptFun={setOwnPost} key={item.id}/>
          })
        }
       
      
      </Postsection>
    </>
  )
}

const Postsection=styled.section`
@media (max-width:480px){
  padding-top:10px;
}
`;
const Postsortcontainer=styled.div`
width:100%;
height:25px;
margin:0px 0px;
@media (max-width:480px){
  display:none;
}


&>a{
 
  padding:0px 3px;
  text-decoration:none;
  display:flex;
  justify-content:space-between;
  padding:5px 0px;
  align-items: center;

  &>div{
    &.sortline{
      width:79%;
      border-top:1px solid rgba(0,0,0,0.2);
    }
    &.sortdiv{
      display:flex;
      position:relative;
    }
    &>span{
      font-size:0.75rem;
      font-weight:400;
     color:rgba(0,0,0,0.6);
   }
   &>h4{
     font-weight:600;
     font-size:0.8rem;
      color:rgba(0,0,0,0.9);
     &>i{
         padding-left:5px;
       }
     }
  }

}
`;
const Sortul=styled.ul`
width:150px;
background-color:white;
border-radius:10px 0px 10px 10px;
padding:5px 0px;
border:1px solid rgba(0,0,0,0.2);
position:absolute;
z-index:99;
top:25px;
right:0px;
box-shadow:1px 1px 10px -4px rgba(0,0,0,0.8);
list-style:none;
&.sortboxnon{
  display:none;
}
`;
const Sortli=styled.li`

&>a{
  padding:8px 10px;
  color:#00000099;
  font-weight:600;
  font-size:0.85rem;
  text-decoration:none;
  transition:all 0.3s ease-in-out;
  display:block;
  &:hover{
    background-color:#DEDEDE;
    transition:all 0.3s ease-in-out;
  }

}
`;

export default Postcom;







