import React from 'react'
import Login from './Login/Login'
import { useState } from 'react';
import Signup from './Signup/Signup'

const MainAuth = () => {
    const[screen, setScreen] = useState(true);
  return (
    <div className='bg-pink-100 flex h-[100vh] justify-center items-center'>
        <div className='w-80 border border-slate-400 rounded-xl shadow-lg shadow-black/50 bg-white '>
        {screen ? (
            <Signup setScreen={setScreen}/>
        ) : (<Login setScreen={setScreen}/>)}
            
        </div>
    
    </div>
  )
}

export default MainAuth
