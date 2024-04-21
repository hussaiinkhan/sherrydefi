import React from 'react'
import terminal from '../assets/terminal.png'
const Developers = () => {
  return (
    <div className='w-full text-white'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
            <div>
                <h1 className='py-4 text-2xl sm:text-3xl md:text-4xl font-bold '>Superpowers for DEFI developers</h1>
                <p className='py-8 sm:text-xl'>Checkout the <span className='text-[#00d8ff]'>documentation</span>, the <span className='text-[#00d8ff]'>quick start</span> or guide below to integrate your project with thousands of tokens and billions of liquidity</p>
            </div>
            <div className='w-full flex justify-center py-16 md:py-0'>
                <img className='max-w-[300px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Developers