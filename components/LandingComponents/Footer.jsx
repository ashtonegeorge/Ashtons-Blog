import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-[40vh] md:h-[75vh] bg-zinc-800 md:p-24 p-8 w-full relative -mt-2 font-ubuntu'>

        <div className='grid grid-cols-1 grid-rows-3 gap-0 text-zinc-400'>

            <h1 className='lg:text-6xl md:text-4xl text-2xl pb-4 md:mx-auto font-bold'>I <p className='text-zinc-900 bg-zinc-400 inline p-1'>occasionall</p>y do freel<p className='text-zinc-900 bg-zinc-400 inline p-1'>ance opportunities.</p></h1>
            <h2 className='lg:text-4xl md:text-3xl text-xl md:mx-auto'>I build web<p className='text-zinc-900 bg-zinc-400 inline p-1'>sites for business</p>es like yours, big and small.</h2>

            <div className="mx-auto pt-6">
                <Link className="transition duration-500 ease hover:bg-teal-600 hover:text-white inline-block bg-sky-600 text-3xl md:text-6xl font-medium rounded-full text-zinc-300 px-8 py-3 md:px-12 md:py-6 cursor-pointer" href='/contact'>Let's talk!</Link>
            </div>

        </div>

    </div>
  )
}

export default Footer