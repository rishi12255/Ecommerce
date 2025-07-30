import React from 'react'
import TextInput from '../../../InputFields/TextInput';
import { useState } from 'react';
import { useRef } from 'react';
import OrangeButton from '../../../Product/component/OrangeButton';

const AddressUser = ({userDetail,setUserDetail,setStage}) => {
  const [error,setError]= useState(0);
  const cityRef= useRef();
  const streetRef =useRef();
  const deliveryDescriptionRef = useRef();
  const errorMessageRef = useRef();
  const handelNext= ()=>{
   if (cityRef.current?.value == "" || cityRef.current?.value.length < 3) {
      errorMessageRef.current = "Please provide your city ";
      setError(1);
    } 
    else if (streetRef.current?.value == "" || streetRef.current?.value.length < 3) {
      errorMessageRef.current = "Please provide your Street ";
      setError(2);
    } else  if (deliveryDescriptionRef.current?.value == ""  ) {
      errorMessageRef.current = "Please provide your Delivery Description";
      setError(3);
    } 
    else {
      setError(0);
      let tempUserDetails = userDetail;
      tempUserDetails.city= cityRef.current.value;
      tempUserDetails.street= streetRef.current.value;
      tempUserDetails.deliveryDescriptionRef= deliveryDescriptionRef.current.value;
      console.log("userdetails",tempUserDetails);
       setStage(2);
    }
    
  }
  return (
    <div>
      <p className='text-10px italic text-center'>Provide your Deliver instructions</p>
     <TextInput label={"City"} placeholder={"Enter Your City Name"} ref={cityRef} err={error == 1 && true} errormessage={errorMessageRef.current}/>
     <TextInput label={"Street"} placeholder={"Enter Street"} ref={streetRef} err={error == 2 && true} errormessage={errorMessageRef.current}/>
     <TextInput label={"Delivery Description"} placeholder={"Enter Delivery Description"} ref={deliveryDescriptionRef} err={error == 3 && true} errormessage={errorMessageRef.current}/>
       <div className='flex justify-center'>
        <OrangeButton title={"Next"} onClick={()=> handelNext()}/>
     </div> 
    </div>
  )
}

export default AddressUser
