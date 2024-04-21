import React from 'react'

import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import { useState } from 'react'


function Navbar() {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='max-w-[1240px] mx-auto flex justify-between items-center w-full h-[90px] px-4 text-white'>
        <div>
            <h1 className={logo?'hidden':'block mx-20 text-3xl font-bold  text-[#00d8ff]'}>sherryDefı</h1>
        </div>
        
        <div className='hidden md:flex px-4'>
            <ul className='hidden md:flex items-center'>
                <li className='px-2'>Platform</li>
                <li className='px-2'>Developers</li>
                <li className='px-2'>Community</li>
                <li className='px-2'>About</li>
            </ul>
            <button className=' px-7 py-2 rounded-full text-white ml-4'>Use Defı</button>
        </div>
        <div onClick={handleNav} className='md:hidden z-20'>
            {nav?<AiOutlineClose size={20}/>:<HiOutlineMenuAlt4 size={20}/>}
        </div>
        {/* Hamburger Menu */}
        <div className={nav?'absolute z-10 bg-black text-white left-0 top-0 w-full h-screen text-center px--4 py-7 flex flex-col':'hidden'}>
            <ul>
                <h1 className='mx-4 mb-4 text-3xl font-bold text-left text-[#00d8ff]'>sherryDefı</h1>
                <li className='m-2 text-xl'>Platform</li>
                <li className='m-2 text-xl'>Developers</li>
                <li className='m-2 text-xl'>Community</li>
                <li className='m-2 text-xl'>Views</li>
                <li className='m-2 text-xl'>About</li>
                <button className='px-7 py-2 rounded-full'>Use Defı</button>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar