import React from 'react'
import { CoverDemo } from './ui/coverHeading'
import { GlareCardDemo } from './ui/Card'
import { SkillCard } from './ui/SkillCard'
import { FaAccessibleIcon, FaBootstrap, FaC, FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiC, SiCplusplus,SiFramer, SiExpress, SiMaterialdesign, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { LiaDocker } from "react-icons/lia";

function TechStack() {
    const webSkills = [{ name: "HTML", icon: <FaHtml5 /> },{ name: "CSS", icon: <FaCss3 /> },{ name: "Bootstrap", icon: <FaBootstrap /> },{ name: "JavaScript", icon: <FaJs /> },{ name: "Node.js", icon: <FaNodeJs/> },{ name: "Express.js", icon: <SiExpress /> },{ name: "MySQL", icon: <SiMysql /> },{ name: "MongoDB", icon: <SiMongodb/> },{ name: "React.js", icon: <FaReact /> },{ name: "Material UI", icon: <SiMaterialdesign /> },{ name: "Next.js", icon: <SiNextdotjs /> },{ name: "TypeScript", icon: <SiTypescript /> },{ name: "Tailwind CSS", icon: <SiTailwindcss/> },{ name: "Framer Motion", icon: <SiFramer /> },{ name: "Shadcn", icon: <SiShadcnui /> },{ name: "Figma", icon: <FaFigma /> },{ name: "Postman", icon: <SiPostman /> },{ name: "C Language", icon: <SiC /> },{ name: "C++", icon: <SiCplusplus /> },{ name: "Java", icon: <FaJava/> },{ name: "Docker", icon: <LiaDocker /> }]
    return (
        <div className='p-4'>
            {/* <h1 className='text-blue-100 text-4xl text-center tracking-wide'>Development <span className='text-blue-300'>Skills</span></h1> */}
            <CoverDemo normalText='Development' animateText='Skills' />
            <div className='flex items-center justify-center gap-4 my-8 md:my-10 lg:my-12 md:gap-8 flex-wrap'>
                {
                    webSkills.map((skill, index) => (<SkillCard key={index} skillName={skill.name} icon={skill.icon} />))
                }
            </div>

        </div>
    )
}

export default TechStack
