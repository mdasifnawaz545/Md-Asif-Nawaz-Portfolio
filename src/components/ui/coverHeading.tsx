import React from "react";
import { Cover } from "@/components/ui/cover";

type Props = {
    normalText: string,
    animateText: string,
}

export function CoverDemo({ normalText, animateText }: Props) {
    return (
        <div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100 dark:from-blue-100 dark:via-white dark:to-white">
                {normalText} &nbsp;<Cover>{animateText}</Cover>
            </h1>
        </div>
    );
}
