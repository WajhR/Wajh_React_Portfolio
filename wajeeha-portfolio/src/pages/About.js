import React from 'react';

export default function About() {
  return (
    <main name="contact" className="w-full h-screen items-center p-4">
      <section className='flex flex-col justify-center items-center w-full h-full'>

        <section className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
        </section>

        <section className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi,nice to meet you, please take a lood around.</p>
          </div>
          <div>
            <p>I am passoniate about building excellent software that improves the lives of people.</p>
          </div>
        </section>


      </section>
    </main>
  );
}
