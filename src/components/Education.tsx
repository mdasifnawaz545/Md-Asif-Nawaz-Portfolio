import React from 'react'
import { educationDetails } from '@/data/data'
import { EducationDetailsCard } from './ui/EducationDetailsCard'
import { ButtonsCard } from './ui/tailwindcss-buttons'
import { CoverDemo } from './ui/coverHeading'
function Education() {

    return (
        <div>{
            <div className="pb-4 px-4 w-full">
                <CoverDemo normalText='Education Cum' animateText='Qualification' />

                <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 w-full max-w-7xl mx-auto gap-10">
                    {
                        educationDetails.map((education, index) => (
                            <EducationDetailsCard key={index} education={education} />
                        ))
                    }
                </div>
            </div>
        }


        </div>
    )
}

export default Education




