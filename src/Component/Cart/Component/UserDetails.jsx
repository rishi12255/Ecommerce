import React, { useRef, useState } from 'react';
import TextInput from '../../InputFields/TextInput';
import OrangeButton from '../../Product/component/OrangeButton';
import { useNavigate } from 'react-router';

const UserDetails = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(0);
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const handleProceed = () => {
    if (!name.current?.value || name.current.value.length < 3) return setErr(1);
    if (!phone.current?.value || phone.current.value.length < 10) return setErr(2);
    if (!address.current?.value) return setErr(3);

    setErr(0);
    alert("Order placed successfully!");
    localStorage.removeItem("cart1");
    navigate("/");
  };

  return (
    <div className="space-y-4 mt-4">
      <TextInput label="Name" placeholder="Enter your name" ref={name} err={err === 1} />
      <TextInput label="Phone Number" placeholder="Enter phone number" ref={phone} err={err === 2} />
      <TextInput label="Address" placeholder="Enter delivery address" ref={address} err={err === 3} />

      <OrangeButton title="Place Order" onClick={handleProceed} />
    </div>
  );
};

export default UserDetails;
