import React from 'react'
import styled from 'styled-components'
import {  Signinbtn } from '../component/Login';
import { Link,useNavigate } from 'react-router-dom';
import {Form,Label,Input,} from './Joinuser';

import { useFormik } from 'formik';
import { JoinUserValidation } from '../formvalidation/Joinformvalidation';
import { usercoll } from '../configure/firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import db from '../configure/firebaseConfig';

let initial={
    fname:'',
    lname:''
}
 function Joinuserinfo(props) {
  let signuser=props.user;
  let navigation=useNavigate();
    let{values,handleSubmit,handleChange,handleBlur,touched,errors}=useFormik({
        initialValues:initial,
        validationSchema:JoinUserValidation,
        onSubmit:async(values,action)=>{
        try{
          await setDoc(doc(db,'users',signuser),{
            fname:values.fname,
            lname:values.lname,
            userId:signuser,
            })
            navigation("/");
        }catch(err){
          console.log(err);
        }
      
         
        }
          })

  return (
    <>

      
            <Userpersonalinfo>
              <Userinfobox>
              <Form onSubmit={handleSubmit} method='POST'>
                <div>
                <Label>First name</Label>
                <Input type='text' name='fname'className={`${(errors.fname&&touched.fname)?("errorinput"):null}`}
                 value={values.fname}
                 onChange={handleChange}
                 onBlur={handleBlur}
                ></Input>
                {
                    (errors.fname&&touched.fname)?( <p className='error'>{errors.fname}</p>):null
                }
               
                </div>
               
                <div >
                <Label>Last name</Label>
                <Input type='text' name='lname' className={`${(errors.lname&&touched.lname)?("errorinput"):null}`}
                 value={values.lname}
                 onChange={handleChange}
                 onBlur={handleBlur}
               ></Input>
                   {
                    (errors.lname&&touched.lname)?( <p className='error'>{errors.lname}</p>):null
                }
                </div >
               
              <Joinbtn type="submit"  >Continue</Joinbtn>
              </Form>
              </Userinfobox>
            </Userpersonalinfo>
            
    
    </>
  )
}

const Userpersonalinfo=styled.div`
width:400px;
min-height:250px;
border-radius:10px;
margin:20px auto 0px auto;
padding:10px 20px ;
background-color:white;
`;
const Userinfobox=styled.div``;
const Joinbtn=styled(Signinbtn)``;
export default Joinuserinfo;