import React from 'react';

const TextInput = React.forwardRef(({ label, placeholder, err }, ref) => {
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
      {err && <p className="text-xs text-red-500 mt-1">Please enter a valid {label.toLowerCase()}!</p>}
    </div>
  );
});

export default TextInput;
