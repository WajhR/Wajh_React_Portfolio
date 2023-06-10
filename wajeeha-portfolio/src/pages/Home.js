import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div name='home' className='w-full h-screen'>


      <div className='max-w-[1000px] mx-auto px-4 py-20 before:flex flex-col justify-center h-full'>
        <p className='text-slate-950'>Hi, <span className='text-2xl'>👋</span> </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-pink-600'>Welcome!</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#606a86]'>I'm a Full Stack Developer.</h2>
        <p className='py-4 max-w-[700px] text-[#363b4b]'>I'm a full-stack developer and I specialize in building responsive full-stack web applications.  I recently graduated from Rutgers Coding bootcamp.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-full'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>

  );
}

