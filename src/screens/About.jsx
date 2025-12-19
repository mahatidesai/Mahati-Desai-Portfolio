import CircularGallery from "../components/CircularGallery"
import { motion } from "motion/react";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import { SiAltiumdesigner } from "react-icons/si";
import { IoMdCode } from "react-icons/io";
import { SiTestcafe } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {

    return (
        <div className="w-full text-center text-white">
            {/* Hero Section */}
            <div className="text-gray-200 text-3xl md:text-4xl mt-8">
                Hi, I'm
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, transition: { duration: 2, ease: "easeIn" }}}
                className="text-6xl md:text-9xl mt-3 heading"
            >
                MAHATI DESAI
            </motion.div>

            <div className="text-2xl md:text-3xl text-gray-300 mt-3">
                Developer & Designer
            </div>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed px-4">
                I blend creativity with functionality — building meaningful digital
                experiences using modern UI and smart backend engineering.
            </p>

            {/* Circular Gallery */}
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div>

            {/* Approach */}
            <div className='max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10'>
                <div className="flex flex-row items-center justify-evenly mt-10">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <SiAltiumdesigner
                        size={55}
                        className="bg-linear-to-b from-blue-900 to-black p-2 rounded-full"
                        />
                        <div className="text-center">Design</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <IoMdCode
                        size={55}
                        className="bg-linear-to-b from-blue-900 to-black p-2 rounded-full"
                        />
                        <div className="text-center">Develop</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <SiTestcafe
                        size={55}
                        className="bg-linear-to-b from-blue-900 to-black p-2 rounded-full"
                        />
                        <div className="text-center">Test</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <GoArrowUpRight
                        size={55}
                        className="bg-linear-to-b from-blue-900 to-black p-2 rounded-full"
                        />
                        <div className="text-center">Deploy</div>
                    </div>
                </div>
            </div>

            {/*SKILLS SECTION */}
            <TechStack/>


            {/* Projects & Contact */}
            <Projects />
            <Contact />
        </div>
    );
};

export default About;
