"use client";
import React from 'react'
import { projects } from '@/data/Projects-end';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';
import { IconBrandReact, IconHome } from '@tabler/icons-react';
import { FloatingDock } from './ui/floating-dock';
import { LampContainer, LampDemo } from './ui/lamp';
import { motion } from 'framer-motion';
import { CoverDemo } from './ui/coverHeading';
type project = {
    id: number,
    title: string,
    des: string,
    img: string,
    iconLists: string[],
    link: string,
    liveLink:string,
    links: proj[]
}
type proj = {
    title: string,
    icon: React.ReactNode,
    href: string,
}
type projects = project[]
function Projects(): any {

    return (
        <div >
            <div className='w-full text-5xl text-blue-100 uppercase text-center p-4 md:6xl lg:7xl'>
            <CoverDemo normalText='Have a Look into my ' animateText='Projects' />
            </div>
            <div className='w-full flex items-center justify-center flex-wrap'>
                {
                    projects.map((project: project) => (

                        <div key={project.id} className="h-[25rem] flex items-center justify-center">
                            <PinContainer
                                title={project.title}
                                href={project.liveLink}
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22.5rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        {project.title}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            {project.des}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 relative
                                overflow-hidden to-blue-500">
                                        <img className='absolute w-full h-full' src={project.img}

                                            alt='' />
                                    </div>
                                    <div className="flex items-center justify-between w-full rounded-lg mt-4">
                                        <div className='flex items-center justify-start scale-75 md:scale-90 gap-2'>
                                            {
                                                project.iconLists.map((stack, index) => (
                                                    <img src={stack} key={index} alt="" />
                                                ))
                                            }
                                        </div>
                                        
                                        <div className='flex justify-center items-center gap-2'>Check Live<span className="relative flex h-3 w-3">
                                       
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
                                        </span>
                                        
                                        </div>

                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))
                }
            </div>
        </div>)

}

export default Projects;