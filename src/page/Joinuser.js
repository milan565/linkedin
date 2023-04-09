import React, { useState } from 'react'
import styled from 'styled-components'
import { Nav,Divider,Gogle, Signinbtn } from '../component/Login';
import { Link,useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik';
import { joinFormValidation } from '../formvalidation/Joinformvalidation';
import Fotter from '../component/Fotter';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../configure/firebaseConfig';
import Joinuserinfo from './Joinuserinfo';

let initialform={
    email:"",
    password:""
}


 function Joinuser() {
    let navigation=useNavigate();
    let[displayState,setDisplayState]=useState(false);
    let [signuser,setSignUser]=useState()
    let{values,handleSubmit,handleChange,handleBlur,touched,errors}=useFormik({
  initialValues:initialform,
  validationSchema:joinFormValidation,
  onSubmit:async(values,action)=>{
    
   try{
     let user=await createUserWithEmailAndPassword(auth,values.email,values.password);
     setSignUser(user.user.uid);
     setDisplayState((state)=>!state);
    
    //  navigation("/");
   }catch(err){
    console.log(err);
   }
   
  }
    })
     
   
  return (
    <>
    <JoinSection>
     <JoinContainer>
        <Nav>
            <a>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="logo image"/>
            </a>
        </Nav>
        <Joinbox>
            <h3>Make the most of your professional life</h3>
            <Userjoinbox className={(displayState)?("disbox"):null}>
            <Joinform>
              <Form onSubmit={handleSubmit} method='POST'>
                <div>
                <Label>Email</Label>
                <Input type='email' name='email'className={`${(errors.email&&touched.email)?("errorinput"):null}`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}></Input>
                {
                    (errors.email&&touched.email)?( <p className='error'>{errors.email}</p>):null
                }
               
                </div>
               
                <div >
                <Label>Password (6 or more character)</Label>
                <Input type='password' name='password' className={`${(errors.password&&touched.password)?("errorinput"):null}`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}></Input>
                   {
                    (errors.password&&touched.password)?( <p className='error'>{errors.password}</p>):null
                }
                </div >
                <Joininfo >
                <p>By clicking Agree & Join, you agree to the LinkedIn <Link to=''>User Agreement</Link>, <Link to=''>Privacy Policy</Link>, and <Link to=''>Cookie Policy</Link>.</p>
              </Joininfo>
              <Joinbtn type="submit"  >Agree & Join</Joinbtn>
              </Form>
              <Joindivider>
                 <span>or</span>
             </Joindivider>
                 <Gogle><span><FcGoogle/></span>Sign in with Google</Gogle>

                 <Signbox>
                    <h6>Already on LinkedIn? <Link to='/'>Sign in</Link></h6>
                 </Signbox>
                
               
            </Joinform>
           
            <Githubhelp>
                <p>Looking to create a page for a business?<Link to=''> Get help</Link></p>
            </Githubhelp>
            </Userjoinbox>
           {(displayState===true)?(<Joinuserinfo user={signuser}/>):null}
            
        </Joinbox>

     </JoinContainer>
  
    </JoinSection>
    <Fotter></Fotter>
    </>
  )
}

export const JoinSection=styled.section`
width:100%;
height:94vh;
background-color: #f3f2ef;


`;
export const JoinContainer=styled.div`
max-width:1128px;
margin:0px auto;
padding:10px 0px 0px 0px;
height:92%;


`;
const Userjoinbox=styled.div`
&.disbox{
    display:none;
}
`;
export const Joinbox=styled.div`
width:100%;
height:100%;

text-align: center;
padding:20px 0px;


&>h3{
    font-size:1.9rem;
    font-weight:400;
    color:black;

}
`;
export const Joinform=styled.div`
width:400px;
min-height:400px;
border-radius:10px;
margin:20px auto 0px auto;
padding:10px 20px ;
background-color:white;

`;

export const Form=styled.form`
width;100%;


&>div{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    text-align: left;
    margin-bottom:15px;
    &.disbox{
        display:none;
    }
    &>p{
        &.error{
        font-size:0.9rem;
        color:red;

        }
    }
}
`;
export const Label=styled.label`
display:block;
font-size:0.95rem;
color:#00000099;
font-weight:400;
`;
export const Input =styled.input`
margin-top:5px;
width:100%;
height:34px;
border-radius:5px;
border:1px solid rgba(0,0,0,0.6);
padding:0px 5px;
&.errorinput{
    border:1px solid red;
}
`;
const Joininfo=styled.div`

padding:0px 20px;
&.disbox{
    display:none
}

&>p{
    font-size:0.8rem;
    color:rgba(0,0,0,0.6);
    font-weight:400;

    &>a{
        font-size:0.8rem;
        font-weight:600;
        color:#0a66c2;
        text-decoration:none;
        &:hover{
            text-decoration:underline;
        }
    }
}
`;
const Joinbtn=styled(Signinbtn)`
&.disbox{
    display:none
}
`;
const Joindivider=styled(Divider)`
&.disbox{
    display:none
}
`;
const Joingoogle=styled(Gogle)`
&.disbox{
    display:none
}
`;

const Signbox=styled.div`
margin-top:10px;
padding:10px 0px;
&>h6{
    font-size:1rem;
    font-weight:400;
    color:rgba(0,0,0,0.8);

    &>a{
        font-weight:600;
        color:#0a66c2;
        text-decoration:none;
        &:hover{
            text-decoration:underline;
        }
    }
}
`;
const Githubhelp=styled.div`
width:400px;
margin:10px auto;
&>p{
    font-size:0.9rem;
    font-weight:400;
    color:rgba(0,0,0,0.8);

    &>a{
        font-weight:600;
        color:#0a66c2;
        text-decoration:none;
        &:hover{
            text-decoration:underline;
        }
    }
}
`;




export default Joinuser