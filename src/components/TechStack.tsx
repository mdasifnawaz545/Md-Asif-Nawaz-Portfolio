import React from 'react'
import { CoverDemo } from './ui/coverHeading'
import { GlareCardDemo } from './ui/Card'
import { SkillCard } from './ui/SkillCard'
import { FaAccessibleIcon, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6'

function TechStack() {
    const webSkills = [{ name: "HTML", icon: <FaHtml5 /> },{ name: "CSS", icon: <FaCss3 /> },{ name: "Node.js", icon: <FaJs /> },{ name: "Express.js", icon: <FaReact/> },{ name: "JavaScript", icon: <FaHtml5 /> },{ name: "", icon: <FaHtml5 /> },{ name: "JavaScript", icon: <FaHtml5 /> },{ name: "", icon: <FaHtml5 /> },{ name: "JavaScript", icon: <FaHtml5 /> },{ name: "", icon: <FaHtml5 /> },{ name: "JavaScript", icon: <FaHtml5 /> },{ name: "", icon: <FaHtml5 /> },{ name: "JavaScript", icon: <FaHtml5 /> },{ name: "", icon: <FaHtml5 /> },{ name: "JavaScript", icon: <FaHtml5 /> },{ name: "", icon: <FaHtml5 /> }]
    return (
        <section id='#skills'>
            {/* <h1 className='text-blue-100 text-4xl text-center tracking-wide'>Development <span className='text-blue-300'>Skills</span></h1> */}
            <CoverDemo normalText='Development' animateText='Skills' />
            <div className='flex items-center justify-center gap-4 flex-wrap'>
                {
                    webSkills.map((skill, index) => (<SkillCard key={index} skillName={skill.name} icon={skill.icon} />))
                }
            </div>

        </section>
    )
}

export default TechStack