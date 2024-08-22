"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { CoverDemo } from "./ui/coverHeading";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="-px-4 rounded-md flex gap-8 flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pb-12">

      <CoverDemo normalText='Love from beloved people ' animateText='Feedback' />
      <div className="my-4 md:my-6 lg:my-8 ">

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "You did a great work as a part of web development team. You deserved this. Congratulations 🎉🎉",
    name: "E Labs",
    title: "KIIT University",
    image: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
  },
  {
    quote:
      "Your dedication to the project is truly admirable. Your commitment sets a high standard for all of us!",
    name: "Anish Mishra",
    title: "Lead Coordinator E-Labs",
    image: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1724318021/1712901512974_gw1mtf.jpg"

  }

];
