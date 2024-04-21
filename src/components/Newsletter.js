import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-[#000300] px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Join Our Defı Community
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-full text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='rounded-full font-medium w-[150px] sm:w-[200px] ml-4 my-6 px-6  py-3'>
              Sign Up
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00d8ff]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;