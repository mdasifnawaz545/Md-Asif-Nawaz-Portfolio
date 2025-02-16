import React from 'react'
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import ShimmerButton from './ui/ShimmerButton'
import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

function Contact() {
    return (
        <div className='flex flex-wrap items-center p-4 justify-center md:justify-between w-full gap-2'>
            {/* <div className='text-blue-100'>
            <h1 className='text-center text-3xl lg:5xl'>Want a Cup of Coeffee ?</h1>
        </div>
        <div></div> */}
            <div className='text-blue-100 '><p className='text-md font-light pt-4 lg:pt-0'>Copyright &copy;&nbsp;2025 Md Asif Nawaz </p></div>
            <div className='flex items-center justify-center -mt-2 lg:mt-0 gap-4'>
                <a href="https://www.linkedin.com/in/mdasifnawaz/">

                    <ShimmerButton title={''} position={'right'} icon={<FaLinkedin />} />


                </a>



                <a href="https://github.com/mdasifnawaz545">

                    <ShimmerButton title={''} position={'right'} icon={<FaGithub />} />

                </a>

                <a href="https://www.instagram.com/mdasifnawaz/">


                    <ShimmerButton title={''} position={'right'} icon={<FaInstagram />} />

                </a>







            </div>
        </div>
    )
}

export default Contact
