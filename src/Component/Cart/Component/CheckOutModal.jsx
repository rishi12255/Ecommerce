import React from 'react'

const CheckOutModal = ({visible, setVisible}) => {
  return (
    <div className={`${visible?  "flex" : "hidden"} fixed inset-0 bg-red-500 h-[100vh] `} onClick={()=> setVisible(false)}>
      
    </div>
  )
}

export default CheckOutModal;
