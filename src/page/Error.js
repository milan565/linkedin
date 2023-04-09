import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

 function Error() {
  return (
    <>
    <Errorsection>
     <Errorbox>
        <h1>Opps!</h1>
        <h3>This page does not found</h3>
        <p></p>
        <Link to='/'>Go to Home page</Link>
     </Errorbox>
    </Errorsection>
    </>
  )
}

const Errorsection=styled.section`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;
const Errorbox=styled.div`
text-align: center;
&>h1{
    font-size:5rem;
    font-weight:600;
    color:#8f5849;
}
&>h3{
    font-size:2rem;
    font-weight:600;
    color:#00000099;
    margin-bottom:15px;

}
&>a{
   padding:8px 30px;
   margin-top:10px;
   font-size:1rem;
   text-decoration:none;
   border-radius:25px;
   background-color:#0078c7;
   transition:all 0.3s ease-in-out;
   color:white;
   &:hover{
    background-color:#004182;
    transition:all 0.3s ease-in-out;
    cursor:pointer;
}
  
}`;
export default  Error

