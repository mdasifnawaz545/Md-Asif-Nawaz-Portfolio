import React from 'react'
import { educationDetails } from '@/data/data'
import { EducationDetailsCard } from './ui/EducationDetailsCard'
function Education() {

    return (
        <div>{
            educationDetails.map((education) => (
                <EducationDetailsCard college={education.college} course={education.coursework} branch={education.branch} year={education.year} />
            ))
        }


        </div>
    )
}

export default Education