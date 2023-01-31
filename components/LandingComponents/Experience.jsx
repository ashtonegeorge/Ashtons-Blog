import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CodeEditor from '../../public/code.png';

const categoryTitles = [ 'Been exposed to', 'Familiar with', 'Some experience with', 'Most experience with' ];

const beenExposedTo = [ 'MaterialUI', 'Bootstrap', 'Pygame' ];
const familiarWith = [ 'SQL', 'NextJS', 'SVG', 'GraphQL', 'Sass', 'Firebase', 'Shopify Storefront API'  ];
const someExperienceWith = [ 'Python 3', 'Swift', 'SwiftUI', 'React', 'Git', 'TailwindCSS', 'Shopify Hydrogen' ];
const mostExperienceWith = [ 'Svelte', 'SvelteKit', 'JavaScript', 'HTML', 'CSS', 'Bash/Zsh' ];

const categories = [ beenExposedTo, familiarWith, someExperienceWith, mostExperienceWith ];


const Experience = () => {
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const [width, setWidth] = useState(null);
    

    useEffect(() => { 
        const width = typeof window !== 'undefined' ? window.innerWidth : null
        setWidth(width)
        if (width > 425){ 
            if(inView) {
                animation.start({
                    x:0.75,
                    opacity:1,
                    transition: { duration:2, delay:1, type:'spring', stiffness:20 }
                });
            }
            if(!inView) {
                animation.start({
                    x:50,
                    opacity:0,
                })
            }
        }
        
    }, [inView]);
    return (

        <div className="md:h-[115vh] h-[85vh] bg-sky-600 overflow-hidden relative -translate-y-1 font-ubuntu" ref={ref}>

            <div>
                <svg viewBox="0 0 900 600" className='w-full p-0 m-0 absolute left-0 bottom-0'>
                    <path d="M0 475L37.5 476.5C75 478 150 481 225 484.5C300 488 375 492 450 494.7C525 497.3 600 498.7 675 493C750 487.3 825 474.7 862.5 468.3L900 462L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
                        className='fill-teal-600'            
                    ></path>
                    <path d="M0 552L37.5 547.3C75 542.7 150 533.3 225 531C300 528.7 375 533.3 450 538.5C525 543.7 600 549.3 675 553C750 556.7 825 558.3 862.5 559.2L900 560L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
                        className='fill-zinc-800 '
                    ></path>
                </svg>
            </div>

            <motion.div 
                className='p-8 md:p-0 flex md:-translate-y-24 lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-12 justify-evenly'
                animate={animation}
            >
                <div className='w-[60vh] relative hidden md:flex'>
                    <Image 
                        src={CodeEditor}
                        alt='Image depicting code in an IDE'
                        width='1000'
                        height='1000'
                        className='static rounded-3xl border-2 border-slate-800'
                    />
                </div>

                <div className='xl:w-[40vw] lg:w-[40vw] sm:self-center font-medium xl:text-xl lg:text-lg md:text-md sm:text-lg md:pb-0'>

                    <div className='relative w-full text-center font-extrabold text-slate-300 xl:text-5xl lg:text-2xl md:text-lg sm:text-md pb-2'>
                        <h1>
                            My <p className='text-teal-600 bg-zinc-800 inline p-1'>Experi</p>ence
                        </h1>
                    </div>

                    <div className='grid grid-cols-2 bg-slate-300 px-4 rounded-3xl border-2 border-slate-900'>
                        {categoryTitles.map((title, index) => (
                            <div className='p-4' key={title}>
                                <div className='font-bold'>
                                    {title}
                                </div>    
                                <div className='text-slate-500'>
                                    {categories[index].map((item) => (
                                        <div key={item} >{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>

        </div>
    )
}

export default Experience