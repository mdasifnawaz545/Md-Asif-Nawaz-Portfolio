"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

type Props = {
  college: string,
  course: string,
  branch: string,
  year: string
}

export function EducationDetailsCard({ college,
  course,
  branch,
  year }: {
    college: string,
    course: string,
    branch: string,
    year: string
  }) {
  return (
    <div className="w-full flex border-y-2 text-blue-100 border-blue-100 h-40">
      <div className="flex items-start justify-between">
        <div >
          <h1>{college}</h1>
          <p>{branch}</p></div>
        <div>
          {year}
        </div>

      </div>
      <br />
      <div></div>

    </div>
  );
}
