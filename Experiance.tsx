import React from 'react'
import { workExperience } from '@/data/data'
import { CoverDemo } from './ui/coverHeading'
import { Button } from './ui/moving-border'
function Experiance() {
    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <div>
                <CoverDemo normalText={'My Work '} animateText={'Experience'} />
            </div>
            <div>
<div className='flex flex-col items-center'>
    <Button
                            key="internship"
                            borderRadius="1.75rem"
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            className="bg-black border border-white/[0.1]
                             dark:bg-slate-900 text-blue-100 dark:text-white dark:border-slate-800 p-4 "
                        >
                            <div className='text-blue-100 flex w-full items-center justify-start gap-4 md:gap-4'>
                                <div>
                                    <img className={`w-16 h-16 md:w-24 md:h-24`} src="/CV.svg" alt="ContraVault AI" />
                                </div>
                                <div className='flex flex-col gap-1 items-start justify-center'>
                                    <p className='font-bold md:text-xl'>ContraVault AI - Internship</p>
                                    <p className='text-sm text-balance
                                 text-gray-400 text-start'>Software Development Engineer | SDE</p>
                                </div>
                            </div>
                        </Button>
</div>
            
            <div className='flex flex-wrap gap-4 my-4 md:my-6 lg:my-8 items-center justify-center'>
                {
                    workExperience.map((work) => (
                        <Button
                            key={work.id}
                            borderRadius="1.75rem"
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            className="bg-black border border-white/[0.1]
                             dark:bg-slate-900 text-blue-100 dark:text-white dark:border-slate-800 p-4 "
                        >
                            <div className='text-blue-100 flex w-full items-center justify-start gap-2 md:gap-4'>
                                <div>
                                    <img className={`w-${work.width}`} src={work.thumbnail} alt={work.thumbnail} />
                                </div>
                                <div className='flex flex-col gap-1 items-start justify-center'>
                                    <p className='font-bold md:text-xl'>{work.title}</p>
                                    <p className='text-sm text-gray-400 text-start'>{work.desc}</p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
            </div>
        </div >
    )
}

export default Experiance