'use client'
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import TechStack from "@/components/TechStack";
import { FaA, FaAddressBook, FaUpwork } from "react-icons/fa6";
import { MacbookScrollDemo } from "@/components/ui/MackbookPro";
import { FaHome } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { MdOutlinePerson3, MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Experiance from "@/components/Experiance";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 }) // If the media screen is upto 1024px then it will be true.
  return (
    <main className="relative bg-[#000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-05">
      <div className="max-w-7xl w-full" >
        <FloatingNav navItems={[{ name: "Home", link: "#home", icon: <RiHomeSmile2Line /> }, { name: "About", link: "#about", icon: <MdOutlinePerson3 /> }, { name: "Projects", link: "#projects", icon: <MdOutlineWorkOutline /> }, { name: "Contact", link: "#contact", icon: <HiOutlineSupport /> }]} />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          {
          (isMobileOrTablet)?(<MacbookScrollDemo imgSrc={""} title="See In your Laptop not mine...!" badge={<FaA />} />):(<ContainerScroll titleComponent="Look At Your Screen Not Mine" />)
}
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experiance">
          <Experiance />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <TechStack />
        </section>
        <section id="feedback">
          <div>
            <InfiniteMovingCardsDemo />
          </div>
        </section>
        <section id="contact">
          {/* <Form /> */}
          <Contact />
        </section>
      </div>
    </main>
  );
}
