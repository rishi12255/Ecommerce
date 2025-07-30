import React from 'react';

const TextInput =({ label, placeholder, err , ref ,errormessage}) => {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        ref={ref}
        placeholder={placeholder}
        className={`mt-1 w-full p-2 rounded-md border ${
          err ? 'border-red-500' : 'border-gray-300'
        } bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
      />
     <div className="text-xs text-red-500 mt-1">
      {err && ( <span>{errormessage ? errormessage:"please provide a valid input"}</span>)}
        </div>
    </div>
  );
};

export default TextInput;
