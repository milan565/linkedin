import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { BsFillCaretDownFill } from "react-icons/bs";

 function Addcom() {
  let[fix,setFix]=useState(false);
  let disfix=()=>{
    if(window.scrollY>=420){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
  window.addEventListener('scroll',disfix);
  return (
    <>
     <Addsection className={`${(fix)?("addfix"):("addfixremo")}`}>
        <Addcontainer>
         <Addbox>
            <Link to=''>
            <img src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png' alert='add image'/>
            </Link>
           
         </Addbox>
         <Linkbox>
           <Link to=''>About<span></span></Link>
           <Link to=''>Accessibility<span></span></Link>
           <Link to=''>Help Center<span></span></Link>
           <Link to=''>Privacy & Terms <span><BsFillCaretDownFill/></span></Link>
           <Link to=''>Ad Choices<span></span></Link>
           <Link to=''>Advertising<span></span></Link>
           <Link to=''>Business Services <span><BsFillCaretDownFill/></span></Link>
           <Link to=''>Get the LinkedIn app <span></span></Link>
           <Link to=''>More <span></span></Link>

         </Linkbox>
         <Lindedinbox>
          <img src='https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png'/><p>LinkedIn Corporation © 2023</p>
         </Lindedinbox>
        </Addcontainer>
     </Addsection>
    </>
  )
}
const Addsection=styled.section`
// border:1px solid red;

&.addfix{
  position:fixed;
  top:75px;
  width:100%;
  max-width:325px;

}
&.addfixremo{
  position:relative;

}
`;
const Addcontainer=styled.div`

min-height:300px;


`;

const Addbox=styled.div`

padding:0px 15px;
border-radius:10px;
background-color:white;
over-flow:hidden;
padding-buttom:0px;
border:1px solid rgba(0,0,0,0.1);
// border:1px solid black;
&>a{
  width:100%;
  margin:0px auto;
    &>img{
        object-fit:cover;
        object-position:center;
        width:100%
        height:155px;
        margin-button:0px;
        // border:1px solid red;
        
    }   
}

`;
const Linkbox=styled.div`

width:77%;
margin:20px auto;
&>a{
    font-size:0.8rem;
    color:rgba(0,0,0,0.6);
    font-weight:400;
    padding:3px 7px;
    text-decoration:none;
    word-break:keep-all;
    display:inline-block;

   &:hover{
    color:#0a66c2;
    text-decoration:underline;
   }
}
`;
const Lindedinbox=styled.div`
width:85%;
margin:0px auto;
display:flex;
&>img{
    width:60px;
    height:15px;
}
&>p{
    padding-left:5px;
    font-size:0.85rem;
    color:rgba(0,0,0,0.6);
    font-weight:600;
}
`;
export default Addcom;















