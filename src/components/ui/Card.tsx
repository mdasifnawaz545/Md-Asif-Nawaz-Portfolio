import Image from "next/image";
import { GlareCard } from "../ui/glare-card";

type props={
    skillName:string,
    icon:string
}

export function GlareCardDemo({skillName,icon}:props) {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
      <Image
      src={icon}
      width={66}
      height={65}
      alt="Icon"/>
      <p className="text-white font-bold text-xl mt-4">{skillName}</p>
    </GlareCard>
  );
}
