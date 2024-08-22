import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import ShimmerButton from './ui/ShimmerButton'
import { SlControlPlay } from 'react-icons/sl'
import { HiChevronRight, HiMiniPlay } from 'react-icons/hi2'
import { FloatingNav } from './ui/floating-navbar'

function Hero() {
    return (
        <div className='pb-20 pt-16 min-h-screen flex flex-col items-center justify-start md:justify-center'>

            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='silver' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='skyblue' />
            </div>
            <div className='flex justify-center relative mt-20 z-10'>
                <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center -gap-8 lg:gap-2'>
                    <div className='md:scale-105 lg:scale-110'>
                        <h2 className='uppercase tracking-widest text-white md:text-sm text-xl text-center'>Welcome to the profile</h2>
                        <TextGenerateEffect className='text-center' words='Md Asif Nawaz' />
                        <p className='text-white text-center tracking-wide text-md px-8 md:p-0 scale-90 md:scale-100'>
                            I&apos;m Md Asif Nawaz, A Full Stack Developer who love to build what you think.
                        </p>
                        <a href="#about" className='flex items-center justify-center my-4'>
                            <ShimmerButton title="Know More" position='right' icon={<HiChevronRight className='ml-2 scale-105' />} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero