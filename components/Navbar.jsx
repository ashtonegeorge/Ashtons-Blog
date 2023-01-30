import React, {useState, useEffect} from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

const Navbar = ({ progressVisible = true }) => {
  const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState(null);
  const [socialVisible, setSocialVisible] = useState();
  let progressBar;
  let socialMenu

  useEffect(() => {
      const width = typeof window !== 'undefined' ? window.innerWidth : null
      setWidth(width)
  }, [])

  if (progressVisible) {
      progressBar = <div id='scrollbar container'>
                              <motion.div 
                                style={{ scaleX: scrollYProgress }}
                                className='bg-sky-400 pt-1 sticky'
                              />
                            </div>
  }
  if (socialVisible) {
    socialMenu = 
    <div className='transition-opacity ease fixed right-6 top-15 bg-zinc-400 grid grid-cols-3 grid-rows-1 text-md md:text-xl text-white w-56 border'>
      <Link
        className='p-3'
        href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend'
      >
        <Image 
          src={"/../public/img/indeed-icon.png"} 
          alt="Indeed Logo" 
          width='50'
          height='50'
          className='inline'
        />        
      </Link>
      <Link
        className='p-3'        
        href='https://www.linkedin.com/in/ashton-george-160619240/'
      >
        <Image 
          src={"/../public/img/linkedin-icon.png"}
          alt="LinkedIn Logo" 
          width='50'
          height='50'
          className='inline'
        />   
      </Link>
      <Link
        className='p-3'
        href='https://www.twitter.com/ashtonegeorge/'
      >
        <Image 
          src={"/../public/img/twitter-icon.png"}
          alt="Indeed Logo" 
          width='50'
          height='50'
          className='inline'
        />   
      </Link>
    </div>
  }

  
  return (
    <div id='main container' className='fixed top-0 left-0 bg-zinc-700 w-full text-zinc-400 font-ubuntu'>

      <div className='flex justify-between'>

          <div className='left-0 px-8 py-4 font-bold md:flex hidden text-xl'>
              <h1>Ashton George</h1>
          </div>

          <div className='p-4 ml-0 md:ml-[70px] relative'>
            <a className='hover:cursor-pointer' href='/'>
              <Logo 
                className='relative'
                width='2rem'
              />
            </a>
          </div>
          
          <div id='link cluster' className='flex justify-evenly px-4 py-4 font-normal text-lg'>
              <Link className='px-4 hover:cursor-pointer' href='/blog'>Blog</Link>
              <Link className='px-4 hover:cursor-pointer' href='/contact'>Contact</Link>
              <button 
                onClick={() => {
                  setSocialVisible(!socialVisible); 
                }}
                className='px-4'
              >Social</button>
              

          </div>
      </div>
      
      {progressBar}
      {socialMenu}
    </div>
  )
}

export default Navbar