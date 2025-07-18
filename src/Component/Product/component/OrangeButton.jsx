import React from 'react'

const OrangeButton = ({title, ...props}) => {
  return (
<div {...props} className="bg-green-500 cursor-pointer text-white py-2 px-3 w-fit rounded-md hover:bg-green-600 hover:scale-105 shadow-sm shadow-orange-50">
      {title}
    </div>
  )
};

export default OrangeButton;
