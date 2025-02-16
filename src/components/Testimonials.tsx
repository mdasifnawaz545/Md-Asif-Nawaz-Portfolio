"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { CoverDemo } from "./ui/coverHeading";
import testimonials from "@/data/testimonials";

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

