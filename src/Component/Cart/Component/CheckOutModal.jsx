import React, { useState, useEffect } from "react";
import { FaTimes, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import totalAmount from "../../ComponentFunction/totalAmount"; // Adjust path
import { useNavigate } from "react-router-dom";

// UserDetails component with delivery location added
const UserDetails = ({ userDetails, setUserDetails, errors }) => {
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={userDetails.name}
          onChange={handleChange}
          className={`w-full p-3 rounded-md border ${
            errors.name ? "border-red-500" : "border-green-300"
          } focus:outline-none focus:ring-2 focus:ring-green-400`}
          placeholder="Enter your full name"
          required
        />
        {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={userDetails.email}
          onChange={handleChange}
          className={`w-full p-3 rounded-md border ${
            errors.email ? "border-red-500" : "border-green-300"
          } focus:outline-none focus:ring-2 focus:ring-green-400`}
          placeholder="Enter your email address"
          required
        />
        {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="phone">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={userDetails.phone}
          onChange={handleChange}
          className={`w-full p-3 rounded-md border ${
            errors.phone ? "border-red-500" : "border-green-300"
          } focus:outline-none focus:ring-2 focus:ring-green-400`}
          placeholder="Enter your phone number"
          required
        />
        {errors.phone && <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>}
      </div>

      {/* Delivery Location */}
      <div>
        <label
          className="block text-gray-700 font-semibold mb-1"
          htmlFor="deliveryLocation"
        >
          Delivery Location <span className="text-red-600">*</span>
        </label>
        <input
          id="deliveryLocation"
          name="deliveryLocation"
          type="text"
          value={userDetails.deliveryLocation}
          onChange={handleChange}
          className={`w-full p-3 rounded-md border ${
            errors.deliveryLocation ? "border-red-500" : "border-green-300"
          } focus:outline-none focus:ring-2 focus:ring-green-400`}
          placeholder="Enter delivery address"
          required
        />
        {errors.deliveryLocation && (
          <p className="text-red-600 mt-1 text-sm">{errors.deliveryLocation}</p>
        )}
      </div>
    </form>
  );
};

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    deliveryLocation: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setVisible(false);
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate, setVisible]);

  // Validation for Step 2
  const validateUserDetails = () => {
    const newErrors = {};

    if (!userDetails.name.trim()) newErrors.name = "Name is required";
    if (!userDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userDetails.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!userDetails.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(userDetails.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }
    if (!userDetails.deliveryLocation.trim())
      newErrors.deliveryLocation = "Delivery location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 2) {
      if (!validateUserDetails()) return; // stop if errors
    }
    setStep(step + 1);
  };

  const getButtonLabel = () => {
    if (step === 1) return "Proceed";
    if (step === 2) return "Next";
    if (step === 3) return "Place Order";
    return "Close";
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4 sm:px-6"
      onClick={() => setVisible(false)}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-lg p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
          onClick={() => setVisible(false)}
          aria-label="Close modal"
        >
          <FaTimes size={22} />
        </button>

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 text-center mb-8 tracking-wide leading-tight">
          {step === 1 && "Your Cart"}
          {step === 2 && "Enter Your Details"}
          {step === 3 && "Choose Payment Method"}
          {step === 4 && "Order Successful 🎉"}
        </h2>

        {/* Step 1: Cart Items */}
        {step === 1 && (
          <div className="space-y-3">
            {cartData.length === 0 ? (
              <p className="text-center italic text-gray-500 text-sm sm:text-base">
                Your cart is empty.
              </p>
            ) : (
              cartData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center rounded-md bg-green-50 px-4 py-2 shadow-sm"
                >
                  <span className="font-medium text-gray-800 truncate text-sm sm:text-base">
                    {item.name}
                  </span>
                  <div className="flex items-center space-x-3 text-sm sm:text-base">
                    <span className="text-gray-600">{item.quantity}x</span>
                    <span className="font-semibold text-gray-900">
                      ₹{item.caloriesPerServing}
                    </span>
                  </div>
                </div>
              ))
            )}
            <div className="text-right font-bold text-green-700 text-lg sm:text-xl mt-4">
              Total: ₹ {totalAmount(cartData)}
            </div>
          </div>
        )}

        {/* Step 2: User Details */}
        {step === 2 && (
          <div className="border border-green-300 rounded-xl p-4 sm:p-6 bg-green-50 shadow-inner">
            <UserDetails
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              errors={errors}
            />
          </div>
        )}

        {/* Step 3: Payment Method */}
        {step === 3 && (
          <div className="space-y-5">
            <label
              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition text-sm sm:text-base
              ${
                paymentMethod === "cash"
                  ? "border-green-600 bg-green-100 shadow-md"
                  : "border-green-300 bg-green-50"
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="accent-green-600"
              />
              <FaMoneyBillWave size={22} className="text-green-700" />
              <span
                className={`font-semibold ${
                  paymentMethod === "cash"
                    ? "text-green-800"
                    : "text-green-700"
                }`}
              >
                Cash on Delivery
              </span>
            </label>

            <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed text-sm sm:text-base">
              <input type="radio" disabled />
              <FaCreditCard size={22} />
              <span>Online Payment (Coming Soon)</span>
            </label>
          </div>
        )}

        {/* Step 4: Success message with animated checkmark */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center py-10 select-none">
            <BsCheckCircleFill
              className="text-green-600"
              size={80}
              style={{
                animation: "scaleFadeIn 0.8s ease forwards",
                opacity: 0,
                transform: "scale(0.5)",
              }}
            />
            <p className="mt-6 text-green-700 font-semibold text-xl sm:text-2xl text-center">
              Your order has been placed successfully! <br />
             
            </p>
          </div>
        )}

        {/* Button */}
        {step !== 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={nextStep}
              disabled={step === 1 && cartData.length === 0}
              className={`px-8 py-3 rounded-full font-semibold transition
                text-sm sm:text-base
                ${
                  step === 1 && cartData.length === 0
                    ? "bg-green-300 cursor-not-allowed text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }
              `}
            >
              {getButtonLabel()}
            </button>
          </div>
        )}

        {/* Animation keyframes */}
        <style>{`
          @keyframes scaleFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CheckOutModal;
