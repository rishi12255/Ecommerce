import React, { useState } from 'react'
import TextInput from '../../../InputFields/TextInput'
import { useRef } from 'react';
import OrangeButton from '../../../Product/component/OrangeButton';

const ContactUser = ({userDetail,setUserDetail,setStage}) => {
  
    const [error, setError] = useState(0);
    const nameRef= useRef();
    const contactNumberRef = useRef();
    const emailRef = useRef();
    const errorMessageRef = useRef();
   const handelData = () => {
    if (nameRef.current?.value == "" || nameRef.current?.value.length < 3) {
      errorMessageRef.current = "Name must me at least 3 character long  ";
      setError(1);
    } else if (emailRef.current?.value == "") {
      errorMessageRef.current = "Please provide a valid Email";
      setError(2);
    } else if (
      contactNumberRef.current?.value == "" ||
      contactNumberRef.current?.value.length < 9
    ) {
      errorMessageRef.current = "Number must be at least 10 character";

      setError(3);
    } else {
      setError(0);
      setUserDetail({
        userName: nameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        email: emailRef.current.value,
        password: "",
        city: "",
        street: "",
        deliveryDescription: "",
      });
      setStage(1);
    }
  };
  return (
    <div>
     <TextInput label={"Name"} placeholder={"Enter Your Name"} ref={nameRef} err={error == 1 && true} errormessage={errorMessageRef.current}/>
     <TextInput label={"Email"} placeholder={"Enter Your Email"} ref={emailRef}  err={error == 2 && true} errormessage={errorMessageRef.current}/>
     <TextInput label={"ContactNumber"} placeholder={"Enter Your Number"} ref={contactNumberRef}  err={error == 3 && true} errormessage={errorMessageRef.current}/>
   <div className='flex justify-center'>
        <OrangeButton title={"Proceed"} onClick={()=> handelData()}/>
     </div>
    </div>
  )
}

export default ContactUser
