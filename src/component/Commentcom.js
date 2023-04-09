import React from 'react'
import styled from 'styled-components';
import { BsEmojiSmile,BsImage } from "react-icons/bs";
 function Commentcom() {
  return (
    <>
     <Commentsection>
        <Commentcontainer>
            <Inputcomment>
            <Commentprofile>
                <img src='https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg' alt='comment user image'/>
            </Commentprofile>
            <Commenttext>
                <form>
                    <Inputholder>
                     <input type='text' placeholder='Add a Comment...' name='comment'/>
                     <button className='submitcomment ' type='submit'>Post</button>
                     <div>
                        <Commentbtn><span><BsEmojiSmile/></span></Commentbtn>
                        <Commentbtn><span><BsImage/></span></Commentbtn>
                     </div>
                    </Inputholder>
                </form>
            </Commenttext>
            </Inputcomment>
        </Commentcontainer>
     </Commentsection>
    </>
  )
}

const Commentsection=styled.section``;
const Commentcontainer=styled.div`
width:100%;
min-height:60px;
padding:5px 0px;
padding-bottom:40px;
`;
const Inputcomment=styled.div`
width:100%;
height:40px;
display:flex;
justify-content:space-between;

`;
const Commentprofile=styled.div`
height:40px;
width:40px;
border-radius:50%;

overflow:hidden;

&>img{
    width:40px;
    height:40px;
    object-fit:cover;
    object-position:center;
}`;
const Commenttext=styled.div`
width:90%;
height:40px;

`;
const Inputholder=styled.div`
display:flex;
justify-content:space-between;
height:40px;

border-radius:35px;
border:2px solid #00000099;
over-flow:hidden;
position:relative;
&>input{
    height:40px;
    width:80%;
    border:none;
    outline:none;
    padding:0px 10px;
    background-color:transparent;
    font-size:0.9rem;
    font-weight:400;
    color:rgba(0,0,0,0.7);
    
}
&>button{
position:absolute;
width:60px;
height:30px;
border:none;
border-radius:25px;
left:0;
top:50px;
background-color:#0a66c2;
color:white;
font-weight:600;
font-size:0.9rem;
cursor:pointer;
transition:all 0.3s ease-in-out;
display:none;
&.submitbtnblock{
    display:block
}
&:hover{
    background-color:#074790; 
    transition:all 0.3s ease-in-out; 
}

}
&>div{
    display:flex;
}
`;
const Commentbtn=styled.button`
width:38px;
height:38px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
border:none;
background-color:transparent;
cursor:pointer;
&:hover{
    background-color:#DEDEDE;   
}
&>span{
    font-size:1.1rem;
    color:rgba(0,0,0,0.8);
    font-weight:700;
}
`;
export default Commentcom;

