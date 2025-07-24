import React, { useRef } from 'react'

const TextInput = ({label, placeholder, ref, err}) => {
  
  return (
  <div className=""> 
    <div className="font-semibold text-gray-700 text-sm ">{label}:</div>
    <input className={`border  w-full ${err ? "border-red-400" :  "border-gray-500"} bg-slate-50 rounded-sm p-1 px-2 placeholder-black`} placeholder={placeholder}
    ref={ref}/>

    <div className="h-5 text-xs text-red-500 px-2">
     {err && "Please enter a valid input!!"}  
    </div>

    
</div>
  )
  
}

export default TextInput
