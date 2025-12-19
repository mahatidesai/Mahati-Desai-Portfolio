import { TimelineComponent } from "../components/Timeline.jsx"
import FlowingMenu from '../components/FlowingMenu.jsx'

const Projects = () => {
    const demoItems = [
        { link: '#', text: 'UI/UX', image: 'https://i.pinimg.com/1200x/fb/66/bd/fb66bd63f84afbb7c0b22200320cb5d7.jpg' },
        { link: '#', text: 'Development', image: 'https://i.pinimg.com/1200x/0f/2f/6e/0f2f6e4d6d0826e41595df010cd7d94e.jpg' },
        { link: '#', text: 'Branding', image: 'https://i.pinimg.com/736x/cd/72/c8/cd72c86ec80c621cbee01eee045e3020.jpg' },
        ];
    
    return(
        <div>
            {/* Projects */}
            <TimelineComponent/>

            {/* Services */}
            <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-5xl md:text-8xl sm:text-4xl mb-4 text-white heading dark:text-white w-full text-left">
                Services
                </h2>
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto pb-10" style={{ height: '200px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div>
        </div>
    )
}
export default Projects