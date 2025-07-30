import React, { useRef, useState } from 'react';
import TextInput from '../../InputFields/TextInput';
import OrangeButton from '../../Product/component/OrangeButton';
import { useNavigate } from 'react-router';

const UserDetails = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const handleProceed = () => {
    if (!name.current?.value || name.current.value.length < 3) return setErr(1);
    if (!phone.current?.value || phone.current.value.length < 10) return setErr(2);
    if (!address.current?.value) return setErr(3);

    setErr(0);
    setShowSuccess(true);
    localStorage.removeItem("cart1");
  };

  const handleOk = () => {
    setShowSuccess(false);
    navigate('/');
  };

  return (
    <div className="space-y-4 mt-4 relative h-fit bg-white px-4 pb-10">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm z-50">
          <div className="bg-white shadow-xl rounded-3xl px-8 py-8 w-[90%] max-w-sm text-center animate-pop">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
              <span className="text-4xl text-green-600">✔</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Success!</h2>
            <p className="text-gray-600 text-sm mb-5">Your order has been placed successfully.</p>
            <button
              onClick={handleOk}
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 shadow-md"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <TextInput label="Name" placeholder="Enter your name" ref={name} err={err === 1} />
      <TextInput label="Phone Number" placeholder="Enter phone number" ref={phone} err={err === 2} />
      <TextInput label="Address" placeholder="Enter delivery address" ref={address} err={err === 3} />

      
    </div>
  );
};

export default UserDetails;
