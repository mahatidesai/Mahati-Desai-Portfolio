import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { Github, Mail } from "lucide-react"
import { CiLinkedin } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";

const Contact = () => {
    return(
        <div>
        <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-5xl md:text-8xl sm:text-4xl mb-4 text-white heading dark:text-white w-full text-left">
                Contact
                </h2>
        </div>
        <Card className='border-0 mx-0 md:mx-30 p-5 contact bg-white backdrop-blur-2xl'>
            <CardHeader>
                <CardTitle className='text-white text-2xl text-left md:text-center sm:text-left'>Let's Connect</CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col md:flex-row justify-start md:justify-between items-start text-gray-300 space-y-4'>

                <div className='flex items-center justify-center space-x-1'>
                    <span className='text-gray-300 hover:text-white'><Mail size={20}/> </span>
                    <a href='mailto:desaimahati@gmail.com' className='hover:text-white  transition-colors font-bold' >
                        desaimahati@gmail.com
                    </a>
                </div>

                {/* LinkedIn */}
                <div className='flex items-center justify-center space-x-1'>
                     <span className='text-gray-300 hover:text-white'><CiLinkedin size={24}/> </span>
                    <a  href='https://www.linkedin.com/in/mahati-desai'  target='_blank'  className='hover:text-white  transition-colors font-bold' >
                        mahatidesai
                    </a>
                </div>

                {/* GitHub */}
                <div className='flex items-center justify-center space-x-1'>
                    <span className='text-gray-300 hover:text-white'><GrGithub size={20}/> </span>
                    <a  href='https://github.com/mahatidesai'  target='_blank'  className='hover:text-white transition-colors' >
                        github.com/mahatidesai
                    </a>
                </div>

            </CardContent>
            </Card>
            <div className="text-xs py-2">© 2025 Mahati Desai. All rights reserved</div>
            <div></div>
        </div>
    )
}
export default Contact