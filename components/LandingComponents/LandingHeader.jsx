import React, { useState, useEffect } from 'react'
import { AnimatedLogo } from '..'
import { motion } from 'framer-motion';

let textPositionVariants = {

  inactive: {
    x:300,
    opacity:0
  },
  active: {
    x:-0.75,
    opacity:1,
    transition: { delay:4, type:'spring', stiffness:20 }
  }

}

const LandingHeader = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
      const width = typeof window !== 'undefined' ? window.innerWidth : null
      setWidth(width)
  }, [])

  let logo;

  if (width <= 425) {
    logo = <div className='md:mt-6 mb-6'><AnimatedLogo /></div>

  } else {
    logo = <motion.div 
    className='relative py-6 lg:w-[40rem] md:w-[30rem] w-[10rem] md:left-[25%]'
    animate={{ x:-325 }}
    transition={{ delay:4, type:'spring', stiffness:20 }}
  >
    <AnimatedLogo />
  </motion.div>
  };

  return (
    <div className="relative h-[100vh] md:h-[115vh] bg-zinc-900 px-8 overflow-hidden font-ubuntu w-full pt-6 md:pt-0">
      <div>
        <svg viewBox="0 0 900 600" className='w-full p-0 m-0 absolute left-0 bottom-0'>
            <path d="M0 508L37.5 503.8C75 499.7 150 491.3 225 492.2C300 493 375 503 450 501.7C525 500.3 600 487.7 675 488.3C750 489 825 503 862.5 510L900 517L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" 
              className='fill-sky-600'
            ></path>
            <path d="M0 527L37.5 525.5C75 524 150 521 225 522.7C300 524.3 375 530.7 450 537.2C525 543.7 600 550.3 675 553.3C750 556.3 825 555.7 862.5 555.3L900 555L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" 
              className='fill-teal-600'
            ></path>
        </svg>
      </div>
      
      <div id='content' className='pt-[10vh] block md:flex justify-around align-middle'>

        {logo}

        <motion.div
          variants={textPositionVariants}
          initial='inactive'
          animate='active'
          className='xl:w-[46rem] lg:w-[40rem] md:w-[30rem] w-[90vw] text-zinc-400 my-auto pt-12 px-2 md:px-0 md:pt-0'
        >
          <div className='font-bold xl:text-7xl md:text-6xl text-3xl md:pb-6 pb-2'>
            <p className='inline bg-zinc-400 text-zinc-900'>
              Hi, my n</p>ame's Ash<p className='inline bg-zinc-400 text-zinc-900'>ton</p>
          </div>
          <div className='font-normal xl:text-4xl md:text-3xl text-2xl'>
            a se<p className='inline bg-zinc-400 text-zinc-900'>lf taugh</p>t web developer <p className='inline bg-zinc-400 text-zinc-900'>and college st</p>udent stud<p className='inline bg-zinc-400 text-zinc-900'>ying Compu</p>ter Science
          </div>
        </motion.div>
      </div>
      
    </div>
  )
}

export default LandingHeader