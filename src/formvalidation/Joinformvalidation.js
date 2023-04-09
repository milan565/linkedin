import * as yup from "yup";

let joinFormValidation=yup.object().shape({
    email: yup.string()
    .required('please enter your email id')
    .email('please enter valid email'),
    password: yup.string()
  .required('please enter password') 
  .min(6, 'Password is too short - should be 6chars minimum.')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[0-9]/, 'Password requires a number')
})

let LoginFormValidation=yup.object().shape({
    email: yup.string()
    .required('please enter your email id')
    .email('please enter valid email'),
    password: yup.string()
    .required('please enter your password') 
    .min(6, 'Password must have 6 character')
 
})

let JoinUserValidation=yup.object().shape({
  fname: yup.string()
  .required('please enter your first name')
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
  ,

  lname: yup.string()
  .required('please enter your last name') 
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed ")
})
export {joinFormValidation};
export {LoginFormValidation};
export {JoinUserValidation}