import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const [width, setWidth] = useState(null);

    useEffect(() => { 
        const width = typeof window !== 'undefined' ? window.innerWidth : null
        setWidth(width);
        
        if (width > 425) { 
            if(inView) {
                animation.start({
                    x:0.75,
                    opacity:1,
                    transition: { duration:2, delay:1, type:'spring', stiffness:20 }
                });
            }
            if(!inView) {
                animation.start({
                    x:-100,
                    opacity:0
                })
            }
        }
    }, [inView]);

    return (

        <div className="h-[70vh] md:h-[125vh] bg-teal-600 px-8 md:py-12 overflow-hidden relative font-ubuntu" ref={ref}>
            <div>
                <svg viewBox="0 0 900 600" className='w-full p-0 m-0 absolute left-0 bottom-0'>
                    <path d="M0 487L37.5 486.5C75 486 150 485 225 484.8C300 484.7 375 485.3 450 488.2C525 491 600 496 675 493.8C750 491.7 825 482.3 862.5 477.7L900 473L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" 
                        className='fill-zinc-900'
                    ></path>
                    <path d="M0 543L37.5 542.2C75 541.3 150 539.7 225 535.5C300 531.3 375 524.7 450 528.5C525 532.3 600 546.7 675 552.8C750 559 825 557 862.5 556L900 555L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" 
                        className='fill-sky-600'
                    ></path>
                </svg>
            </div>
            <motion.div 
                className='block md:flex justify-around xs:block mt-3 md:mt-0'
                animate={animation}
            >   
                <div className='flex-col flex md:mt-[20vh] w-full xl:w-[55vw] md:w-1/2 my-auto drop-shadow-xl'>
                    <div className='text-transparent font-normal lg:font-bold xl:text-7xl md:text-6xl text-4xl md:pb-6 pb-2'>
                        <h1 className="bg-zinc-800 bg-clip-text bg-center">in <p className='text-sky-600 bg-zinc-800 inline p-1 relative'>college I a</p>m a work study a<p className='text-sky-600 bg-zinc-800 inline p-1'>nd tutor</p></h1> 
                    </div>
                    <div className='text-zinc-300 font-light lg:font-normal lg:text-5xl md:text-4xl text-2xl'>
                        <h1><p className='text-sky-600 bg-zinc-800 inline relative px-1'>under the h</p>ood I am a dev<p className='text-sky-600 bg-zinc-800 z-0 inline p-1'>eloper with</p> a zeal for UI design</h1>
                    </div>
                </div>

                <div className='w-[75vw] md:w-[35rem] static mx-auto md:m-0 pt-4'>
                    <Image
                        src={"/../public/me.png"}
                        alt="Ashton George"
                        width='1000'
                        height='1000'
                        className='static rounded-3xl drop-shadow-2xl border-2 border-slate-800'
                    />
                </div>

            </motion.div>

        </div>
    )
}

export default About