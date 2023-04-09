import styled from "styled-components";
import React, { useEffect, useReducer } from 'react'
import { Link,useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { LoginFormValidation } from "../formvalidation/Joinformvalidation";
import { auth,fireProvider } from "../configure/firebaseConfig";
import {  signInWithEmailAndPassword,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { addLogUser } from "../reduxslic/signinslice";

let initial={
    email:"",
    password:""
}
 function Login() {
    
      let navigation=useNavigate();
      let dispatch=useDispatch();
      
     
    let{values,handleChange,handleSubmit,handleBlure,touch,errors}=useFormik({
        initialValues:initial,
        validationSchema:LoginFormValidation,
        onSubmit:async(values,action)=>{
        try{
          await signInWithEmailAndPassword(auth,values.email,values.password);
         
          navigation("/feed");

        }catch(err){
            console.log(err);
        }
        }
    })
    let googleSignIn=async()=>{
     try{
     await signInWithPopup(auth,fireProvider);
     setuser();
     navigation("/feed");
     }catch(err){
        console.log(err);
     }
    }
    const setuser=onAuthStateChanged(auth,(currentUser)=>{
        let user=currentUser;
        let{displayName,email,photoURL,emailVerified}=user;
        let userInfo={displayName,
         email,
         photoURL,
         emailVerified};
         dispatch(addLogUser(userInfo))
    });
  
      
  return (
    <>
    <Container>
        <Nav>
            <a href="/">
                <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="logo image"/>
            </a>
            <div>
                <Join ><Link to='/join'>Join now</Link></Join>
                <Sign><Link to=''>Sign In</Link></Sign>
            </div>
        </Nav>
        <Section>
            <Sectionbox>
              <h1>Millions of jobs and people hiring</h1>
               <Formbox>
                 <Form onSubmit={handleSubmit}>
                    {errors.email||errors.password?( <p className="loginerro">{errors.email||errors.password}</p>):null}
                   
                    <Input type='email' name="email" placeholder="Email Id"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlure}/>

                    <Input type='password' name="password" placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlure}/>
                    <Forgetpassword>Forgot password?</Forgetpassword>
                    <Signinbtn type="submit">Sign in</Signinbtn>
                    

                 </Form>
                 <Divider>
                 <span>or</span>
                 </Divider>
                 
                 <Gogle onClick={googleSignIn}><span><FcGoogle/></span>Sign in with Google</Gogle>
               </Formbox>
            </Sectionbox>
            <Hero>
                <img src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="loiin section page image"/>
            </Hero>
        </Section>
    </Container>
    </>
  )
}
const Container=styled.div`
padding:20px 0px;
background-color:white;
`;
export const Nav=styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0px 16px;
align-item:center;
position:relative;
display:flex;
justify-content:space-between;
flex-wrap:nowrap;

@media(max-width:768px){
    padding:0px 20px;
}
@media(max-width:568px){
    padding:0px 10px;
}
& > a{
    width:135px;
   
    @media(max-width:568px){
        width:110px;
    }
    
&>img{
    width:135px;
    height:34px;
    @media(max-width:768px){
        width:90px;
        height:25px
    }
    @media(max-width:568px){
        width:85px;
        height:20px
    }
}

}

`;
const Join=styled.a`
&>a{
    padding:15px 25px;
    border-radius:25px;
    color:rgba(0,0,0,0.8);
    font-size:1rem;
    font-weight:500;
    text-decoration:none;
    &:hover{
        background-color:rgba(0,0,0,0.04);
        color:rgba(0,0,0,0.9);
        transition:all 0.5s easy-in-out;
        text-decoration:none;
        cursor:pointer;
    }
}

`
const Sign=styled.a`
&>a{
    padding:12px 25px;
    border-radius:25px;
    color:#0A66C2;
    font-size:1rem;
    font-weight:500;
    border:2px solid #0A66C2;
    line-height:25px;
    margin-left:5px;
    text-decoration:none;
    
    &media(max-width:768px){
        margin-right:15px;
    }
    
    &:hover{
        background-color:rgba(10, 102, 194,0.1);
        color:#004182;
        transition:all 0.5s easy-in-out;
        text-decoration:none;
        cursor:pointer;
    };
}

`
let Section=styled.section`
max-width:1128px;
padding:50px 0px 0px 0px;
margin:auto;
display:flex;
flex-direction:row;
min-height:500px;
@media(max-width:768px){
    flex-direction:column;
    padding:30px 0px;
}
`;

let Sectionbox=styled.div`
width:45%;

@media(max-width:568px){
   
    margin:20px 0px;
}
h1{
font-size:3.3rem;
font-weight:200;
letter-spacing:2px;
word-spacing:5px;
color:#8f5849;
line-height:60px;
@media(max-width:768px){
    font-size:1.9rem;
    word-spacing:1px;
    letter-spacing:0.5px;
}
@media(max-width:568px){
    line-height:1.1;
}
};
@media(max-width:768px){
    width:100%;
    padding:0px 20px;
}
`;
let Hero=styled.div`
width:55%;
padding-right:1px;
position:relative;
img{
    width:1000px;
    height:500px;
    position:absolute;
    @media(max-width:768px){
        max-width:500px;
        max-height:200px
    }
};
@media(max-width:768px){
    width:100%;
    display:flex;
    justify-content:center;
}
`;
const Formbox=styled.div`
width:80%;

margin-top:20px;
padding:30px 0px;
@media(max-width:768px){
    width:90%;
    padding:0px 0px;
}
`;
const Form=styled.form`
&>p{
    &.loginerro{
        font-size:0.9rem;
        font-weight:600;
        color:red;
    }
}`;
const Input=styled.input`
width:100%;
padding:15px 8px;
font-size:1rem;
margin:10px 0px
`;
const Forgetpassword=styled.a`
margin:10px 0px;
font-size:1rem;
color:rgba(0,0,0,1);
&:hover{
    cursor:pointer;
    border-bottom:1px solid black
}
`;
export const Signinbtn=styled.button`
width:100%;
padding:15px 0px;
display:flex;
justify-content:center;
aling-item:center;
margin:20px 0px;
border-radius:32px;
background-color:#0078c7;
border:none;
color:white;
font-size:1.1rem;
font-weight:400;
letter-spacing:1px;
transition:all 0.3s ease-in-out;
&:hover{
    background-color:#004182;
    transition:all 0.3s ease-in-out;
    cursor:pointer;
}
`;
export const Divider=styled.div`


margin:2px 0px;
position:relative;
display:flex;
justify-content:center;
align-item:center;
&:after{
content:"";
position:absolute;
right:0;
top:50%;
width:45%;
border-top:1px solid rgba(0,0,0,0.4);
};
&:before{
    content:"";
    position:absolute;
    left:0;
    top:50%;
    width:45%;
    border-top:1px solid rgba(0,0,0,0.4);
};
&>span{
    font-size:0.9rem;
    color:rgba(0,0,0,0.8);   
}
`;
export const Gogle=styled.a`
width:100%;
padding:10px 0px;
display:flex;
justify-content:center;
aling-item:center;
margin:20px 0px 5px 0px;
border-radius:30px;
background-color:transparent;
border:1px solid rgba(0,0,0,0.6);
color:rgba(0,0,0,0.6);
font-size:1.1rem;
font-weight:400;
letter-spacing:0px;
transition:all 0.3s ease-in-out;
&:hover{
    box-shadow:inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    cursor:pointer;
    background-color:rgba(0,0,0,0.04); 
    transition:all 0.3s ease-in-out;
};
&>span{
    font-size:1.4rem;
    padding:0px 15px 0px 0px;
    diplay:flex;
    aling-item:center;
    aling-item:center;

}
@media(max-width:768px){
    margin:20px 0px 20px 0px   
}

`;
export default Login
