import React, { useState } from 'react'
import ContactUser from './Component/ContactUser';
import AddressUser from './Component/AddressUser';
import PasswordUser from './Component/PasswordUser';

const Signup = ({setScreen}) => {
    const [userDetail,setUserDetail]=useState(  {
        userName:"",
        contactNumber:"",
        email:"",
        password:"",
        city:"",
        street:"",
        deliveryDescription:""

    });
  const [stage,setStage]= useState(0);
  
  return (
    <div className='p-3'>
      <div className='text-2xl font-bold text-green-500 text-center'>
        Signup
      </div>
      <div>
         {stage == 0 && <ContactUser userDetail={userDetail} setUserDetail={setUserDetail} setStage={setStage}/>}
      </div>
      <div>
         {stage == 1 && <AddressUser userDetail={userDetail} setUserDetail={setUserDetail} setStage={setStage}/>}
      </div>
      <div>
         {stage == 2 && <PasswordUser userDetail={userDetail} setUserDetail={setUserDetail} setStage={setStage}/>}
      </div>
    </div>
  )
}

export default Signup
