import React from 'react'
import styled, { keyframes } from 'styled-components';

 function Loading() {
  return (
    <>
      <Loadingsection>
        <Loadingbox>
         <Loadingcontainer>
           <img src='https://1000marche.net/wp-content/uploads/2020/03/LinkedIn-Logo-1.png'/>
         </Loadingcontainer>
        </Loadingbox>
      </Loadingsection>
    </>
  )
}
const loadingAnimation=keyframes`
0%{
 left:0%;
}
50%{
    left:75%;
}
100%{
left:0%;
}`
const Loadingsection=styled.section``;
const Loadingbox=styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#f5f5f5;
`;
const Loadingcontainer=styled.div`
max-width:200px;
height:100px;

border-bottom:3px solid gray;
position:relative;

&:after{
      content:" ";
    position:absolute;
    left:-10%;
    top:100%;
    width:25%;
    border-bottom:3px solid blue;
    z-index:1;
    animation: ${loadingAnimation} 2s linear infinite;
}
&>img{
    width:200px;
    height:100px;
   
}
`;

export default Loading;
