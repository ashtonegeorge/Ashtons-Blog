import React from 'react'
import Image from 'next/image';

const categoryTitles = [ 'Been exposed to', 'Familiar with', 'Some experience with', 'Most experience with' ];

const beenExposedTo = [ 'MaterialUI', 'Bootstrap', 'Pygame' ];
const familiarWith = [ 'SQL', 'NextJS', 'SVG', 'GraphQL', 'Sass', 'Firebase', 'Shopify Storefront API'  ];
const someExperienceWith = [ 'Python 3', 'Swift', 'SwiftUI', 'React', 'Git', 'TailwindCSS', 'Shopify Hydrogen' ];
const mostExperienceWith = [ 'Svelte', 'SvelteKit', 'JavaScript', 'HTML', 'CSS', 'Bash/Zsh' ];

const categories = [ beenExposedTo, familiarWith, someExperienceWith, mostExperienceWith ];


const Experience = () => {
  return (

    <div className="h-[100vh] bg-[#588DC9] p-8 flex align-middle justify-evenly">

        <div className='lg:w-1/3 sm:w-1/4 static py-16'>
            <Image 
                src='/../public/code.png'
                alt='Image depicting code in an IDE'
                width='1000'
                height='1000'
                className='static rounded-3xl drop-shadow-2xl border-2 border-slate-800'
            />
        </div>

        <div className=' w-[40%] py-16 font-medium text-xl'>

            <div className='relative w-full text-center font-extrabold text-slate-300 text-3xl pb-2'>
                <h1>
                    My Experience
                </h1>
            </div>


            <div className='grid grid-cols-2 bg-slate-300 p-4 rounded-3xl border-2 border-slate-900 drop-shadow-2xl'>
                {categoryTitles.map((title, index) => (
                    <div className='p-4'>
                        <div className='font-bold'>
                            {title}
                        </div>    
                        <div className='text-slate-500'>
                            {categories[index].map((item) => (
                                <div>{item}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            
        </div>

    </div>

  )
}

export default Experience