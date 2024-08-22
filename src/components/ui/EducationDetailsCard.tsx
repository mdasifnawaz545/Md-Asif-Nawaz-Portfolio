"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

type Props = {
  education: {
    college: string,
    course: string,
    branch: string,
    year: string,
    logo: string
  }

}

export function EducationDetailsCard({ education: { college,
  course,
  branch,
  year,
  logo } }: Props) {
  return (
    <div className="w-full md:min-w-full flex p-4 py-4  bg-black border border-white/[0.1] rounded-[1.75rem] text-blue-100 border-blue-100 h-40">
      <div className="flex w-full items-start justify-between">
        <div className="">
          <h1 className="text-xl lg:text-2xl">{college}</h1>
          <p className="text-gray-600 py-2">{branch}</p></div>
        <div className="whitespace-nowrap h-full flex flex-col items-center justify-between">
          <div>{year}</div>
          <div>
            <img className=" w-24" src={logo} alt="" />
          </div>


        </div>

      </div>
      <br />
      <div></div>

    </div>
  );
}

