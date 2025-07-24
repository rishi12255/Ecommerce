import React, { useRef } from 'react'
import TextInput from '../../InputFields/TextInput'
import OrangeButton from  '../../Product/component/OrangeButton'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const UserDetails = () => {
  const navigate = useNavigate();
   const [err, setErr] = useState(0);
    const name = useRef();
    const phone =useRef();
    const address = useRef();


    const handleProceed =() =>{

        console.log("Name:",name.current?.value);
        console.log("Phone:",phone.current?.value);
        console.log("Address:",address.current?.value);
        if (name.current?.value== "" || name.current.value == null || name.current.value.length<3){
            setErr(1);
        }
        else if(phone.current?.value=="" || phone.current.value.length<10){
            setErr(2);
                }
                else if(address.current?.value == ""){
                    setErr(3);
                }
                else{
                    setErr(0);
                    alert("Oder placed Sucessfully");
      localStorage.removeItem("cart1");
      navigate("/");

                }
      };
      


  return (
    <div>
      <TextInput label={"Name"} placeholder={"Enter a Name"} ref={name} err={err==1 && true} />
      <TextInput label={"Number"} placeholder={"Enter a PhoneNumber"} ref={phone} err={err==2 && true}/>
      <TextInput label={"Address"} placeholder={"Enter a  Address"} ref={address} err={err==3 && true} />

      <div>
        <OrangeButton title={"Proceed"}  onClick= {()=> handleProceed()}/>
      </div>

    </div>
  )
}

export default UserDetails
