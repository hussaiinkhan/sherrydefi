import React from 'react'
import spaceVid from '../assets/video.mp4'

function Hero() {
  return (
    <div className='w-full h-screen top-[90px]'>
        <video className='w-full h-full object-cover absolute' src={spaceVid} autoPlay loop muted/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white '>
            <h1 className=' text-3xl sm:text-4xl md:text-5xl font-bold '>Decentralized</h1>
            <h1 className='py-4 text-3xl sm:text-4xl md:text-5xl font-bold'><span className='text-[#00d8ff]'>Trading</span> Protocol</h1>
            <p className='sm:text-xl'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
            <div className='flex justify-center py-4'>
                <button className='px-7 py-2 rounded-full'>Use Defi</button>
                <button className='ml-4 px-11 py-2 rounded-full'>FAQ</button>
            </div>
            
        </div>
        <div className='flex items-center justify-center'>
            <p className='absolute bottom-0 text-white text-center font-bold md:text-2xl'>Total Volume Secured: $42,104,783,662,47</p>
        </div>
        
    </div>
  )
}

export default Hero