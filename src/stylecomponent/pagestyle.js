import styled from "styled-components";

export const Homesection=styled.section`
padding-top:50px;


overflow-y:scroll;
@media (max-width:480px){
    padding-top:0px;
}
`;
export const Container=styled.div`
max-width:1128px;
margin:0px auto;
padding:25px 0px;
margin-bottom:150px;
// border:2px solid green;

display:flex;
@media(max-width:860px){
    padding:20px 20px;
}
@media(max-width:768px){
    padding:10px 10px;
}
@media(max-width:568px){
    padding:10px 0px;
}
@media(max-width:480px){
    padding:0px 0px;
}
`;
export const Containerbox=styled.div`
width:70%;
height:100%;
display:flex;
// border:2px solid black;
@media(max-width:992px){
    width:750px;
    margin:0px auto;
  
}
@media(max-width:768px){
   flex-direction:column;
   max-width:600px;
}
@media(max-width:568px){
    margin:0px;
    width:100%;
    margin-bottom:50px;
}
;
`;
export const Leftbox=styled.div`
width:30%;
min-height:inherit;
padding:0px 5px 0px 0px;
display:flex;
flex-direction:column;

@media(max-width:768px){
    width:100%;   
}
@media(max-width:568px){
    padding:0px 0px 0px 0px  
}
@media (max-width:480px){
    display:none;
}
`;
export const Midbox=styled.div`
width:70%;
height:100%;
padding:0px 10px;
position:relative;

@media(max-width:768px){
    width:100%;   
}
@media(max-width:568px){
    padding:0px 0px 0px 0px  
}

@media (max-width:480px){
    padding-top:50px;
}
`;

export const  Rightbox=styled.div`
max-width:30%;
width:100%;
height:100%;
padding:0px 0px 0px 5px;
position:relative;
// border:1px solid gold;
@media(max-width:992px){
    display:none;
   
}
`;