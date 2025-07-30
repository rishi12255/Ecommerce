import React, { useState } from 'react'
import TextInput from '../../../InputFields/TextInput';
import OrangeButton from '../../../Product/component/OrangeButton';
import { useRef } from 'react';
import SignupApi from "../../../Api/Auth/SignupApi";
import { useNavigate } from 'react-router-dom';

const PasswordUser = ({userDetail,setUserDetail,setStage}) => {
  const navigate = useNavigate();
  const [error,setError]= useState(0);
  const errorMessageRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const handleSend = () =>{
     if (passwordRef.current?.value == "" || passwordRef.current?.value.length < 8) {
      errorMessageRef.current = "password must be 8 character long ";
      setError(1);
    } else  if (confirmPasswordRef.current?.value == ""|| passwordRef.current.value!=confirmPasswordRef.current?.value ) {
      errorMessageRef.current = "Password and confirm Password did not match ";
      setError(2);
    }  else {
      setError(0);
              let tempUserDetails = userDetail;
      tempUserDetails.password= passwordRef.current.value;
      console.log("temp data" ,tempUserDetails);
      SignupApi(tempUserDetails,navigate,setStage);
    }

  } 
  return (
    <> 
    <p className='text-center text-[10px] italic'>
      Set up password
    </p>
     <TextInput label={"Password"} placeholder={"Enter Your password"} ref={passwordRef} err={error == 1 && true} errormessage={errorMessageRef.current}/>
     <TextInput label={" Confirm Password"} placeholder={"Confirm your password"} ref={confirmPasswordRef} err={error == 2 && true} errormessage={errorMessageRef.current}/>
    <div className='flex justify-center'>
        <OrangeButton title={"SignUp"} onClick={()=> handleSend()}/>
     </div> 
    </>
   
  )
}

export default PasswordUser
