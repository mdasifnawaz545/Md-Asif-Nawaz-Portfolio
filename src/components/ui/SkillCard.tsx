"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { FaAccessibleIcon } from "react-icons/fa6";


type props = {
    skillName: string,
    icon: React.ReactNode,
}


export function SkillCard({ skillName, icon }: props) {
    return (
        <div className="flex justify-center m-1 text-center">
            <HoverBorderGradient
                containerClassName="rounded-lg border-none"
                as="button"
                className="dark:bg-black  text-blue-100 dark:text-white flex items-center space-x-2"
            >
                {icon}
                <span>{skillName}</span>
            </HoverBorderGradient>
        </div>
    );
}

const AceternityLogo = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black dark:text-white"
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
            />
        </svg>
    );
};
