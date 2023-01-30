import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pathVariants = {

    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1.01,
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }

}

const AnimatedLogo = () => {
  return (
    <div>
        <svg viewBox="0 0 61.06 54.76">
            <motion.g className='stroke-slate-700 stroke-'>
                <motion.path d="M54.53,54.13H6.53c-3.3,0-6-2.7-6-6H.53c0-3.3,2.7-6,6-6H54.53c3.3,0,6,2.7,6,6h0c0,3.3-2.7,6-6,6Z" 
                    className='fill-teal-600' variants={pathVariants} initial="hidden" animate="visible"/>
                <motion.path d="M49.33,51.13L25.33,9.53c-1.7-2.9-.7-6.5,2.2-8.2h0c2.9-1.7,6.5-.7,8.2,2.2l24,41.6c1.7,2.9,.7,6.5-2.2,8.2h0c-2.9,1.7-6.5,.7-8.2-2.2Z" 
                    className='fill-cyan-600' variants={pathVariants} initial="hidden" animate="visible"/>
                <motion.path d="M35.73,9.63L11.73,51.23c-1.7,2.9-5.3,3.9-8.2,2.2h0c-2.9-1.7-3.9-5.3-2.2-8.2L25.33,3.63c1.7-2.9,5.3-3.9,8.2-2.2h0c2.9,1.6,3.9,5.3,2.2,8.2Z" 
                    className='fill-sky-600' variants={pathVariants} initial="hidden" animate="visible"/>
            </motion.g>
        </svg>

    </div>
  )
}

export default AnimatedLogo