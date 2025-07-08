import React from 'react'

import { FaStar } from "react-icons/fa";
import ButtonCard from './ButtonCard';

const Card = ({data}) => {

    console.log("Data From card",data);
  return (
    <div>
      <div className="m-12 flex gap-5">

      <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div> 



      <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image1} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType1}</div>
          <div className="font-semibold text-xl">{data.name1}</div>
        <div className="flex m-1   ">
            {data.rating1}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>


       <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>

       <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>
      </div>


      <div className="flex  gap-5 m-12">

         <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>

       <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>

       <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>

       <div className="border  bg-white  h-[350px] w-72 rounded-lg border-white shadow-2xl ">   
      <div >
        <img src={data.image} alt="image is not loaded" className="h-40 w-64 rounded-lg m-4"/>
      </div>
      <div className="m-2">

          <div className="font-bold text-xl m-1">{data.mealType}</div>
          <div className="font-semibold text-xl">{data.name}</div>
        <div className="flex m-1   ">
            {data.rating}
            <div className="m-1 flex">
            <span><FaStar /></span><FaStar /><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            </div>
            
            </div>
        <div className="flex gap-14" >
            <div className='m-1'><span>Price:</span>{data.caloriesPerServing}</div>
             <ButtonCard/>
        </div>
       
      </div>
      </div>
      </div>
    </div>
  )
}

export default Card
