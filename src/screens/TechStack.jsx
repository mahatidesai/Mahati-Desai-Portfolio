import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";

const TechStack = () => {
    const FrontendStack = [
        {id: 1, name: 'React'},
        {id: 2, name: 'React Native'},
        {id: 3, name: 'Javascript'},
        {id: 4, name: 'HTML'},
        {id: 5, name: 'CSS'},
        {id: 6, name: 'Tailwindcss'}
    ]

    const BackendStack = [
    { id: 1, name: 'Python FastAPI' },
    { id: 2, name: 'REST API' },
    { id: 3, name: 'MySQL' },
    { id: 3, name: 'Sockets' },
    { id: 5, name: 'Docker' },
    ]

    const OtherStack = [
        {id: 1, name: 'Git Hub'},
        {id: 2, name: 'Automation'},
        {id: 3, name: 'Figma '}
    ]

    return(
        <>
            <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">

                {/* Tech Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="h-full border border-gray-800 bg-black/40 backdrop-blur-md 
                        rounded-2xl p-6 flex flex-col items-center gap-4 
                        hover:border-purple-400 transition duration-200 ease-out hover:scale-[1.01]"
                    >
                        {/* <RiReactjsLine className="text-5xl text-cyan-400" /> */}
                        <h3 className="text-xl font-semibold ">Frontend</h3>
                        <p className="text-gray-400 text-[14px] grid grid-cols-3 gap-2">
                            {FrontendStack.map((skill, index)=> (
                                <div key={index} className="flex flex-row items-center justify-center gap-1">
                                 {skill.name}   
                                </div> 
                            ))}                         
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="h-full border border-gray-800 bg-black/40 backdrop-blur-md
                        rounded-2xl p-6 flex flex-col items-center gap-4
                        hover:border-purple-400 transition duration-200 ease-out hover:scale-[1.01]"
                    >
                        {/* <SiFastapi className="text-5xl text-green-400" /> */}
                        <h3 className="text-xl font-semibold">Backend</h3>
                        <p className="text-gray-400 text-[14px] grid grid-cols-3 gap-2">
                            {BackendStack.map((skill, index)=> (
                                <div key={index} className="flex flex-row items-center justify-center gap-1">
                                 {skill.name}   
                                </div>
                            ))}
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-full border border-gray-800 bg-black/40 backdrop-blur-md
                        rounded-2xl p-6 flex flex-col items-center gap-4
                        hover:border-purple-400 transition duration-200 ease-out hover:scale-[1.01]"
                    >
                        
                        <h3 className="text-xl font-semibold">Other</h3>
                        <p className="text-gray-400 text-[14px] grid grid-cols-3 gap-2">
                           {OtherStack.map((skill, index)=> (
                                <div key={index} className="flex flex-row items-center justify-center gap-1">
                                    {skill.name}   
                                </div>
                           ))}
                        </p>
                    </motion.div>

                </div>

                {/* Scrolling Marquee — Tech Logos */}
                {/* <div className="mt-12 border border-gray-800 rounded-xl bg-black/30 py-4">
                    <Marquee speed={40} gradient={false} pauseOnHover>
                        <div className="flex items-center gap-12 text-gray-300 text-base">
                            <span className="flex items-center gap-2">
                                <RiReactjsLine className="text-xl text-cyan-400" /> React
                            </span>
                            <span className="flex items-center gap-2">
                                <RiReactjsLine className="text-xl text-cyan-400" /> React Native
                            </span>
                            <span className="flex items-center gap-2">
                                <SiFastapi className="text-xl text-green-400" /> FastAPI
                            </span>
                            <span className="flex items-center gap-2">
                                <FaPython className="text-xl text-yellow-400" /> Python
                            </span>
                            <span className="flex items-center gap-2">
                                🗄️ Databases
                            </span>
                            <span className="flex items-center gap-2">
                                🎨 UI/UX Design
                            </span>
                        </div>
                    </Marquee>
                </div> */}
            </div>
        </>
    )
}
export default TechStack