import React from 'react'

const Card = (props) => {
  return (
   
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8 hover:scale-105 duration-300'>
    {/* grid is used for card conatiner and flex is used for card itself so these are written in their respective components */}
     
            <div className='bg-[#00d8ff] inline-flex p-2 rounded-full w-[56px]'>
                {props.icon}
            </div>
            <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
            <p>
                {props.text}
            </p>
    
  </div>
  )
}

export default Card