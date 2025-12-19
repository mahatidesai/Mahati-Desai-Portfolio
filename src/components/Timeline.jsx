import { Timeline } from "@/components/ui/timeline";
import Ravel from '../assets/images/ravel.png'
import RavelAdmin from '../assets/images/ravel2.png'
import Flowiz from '../assets/images/flowiz.png'
import sign from '../assets/images/sign.png'

export function TimelineComponent() {
  const data = [
    {
      title: "FlowViz",
      content: (
        <div>
          <h3>AI-Powered Flow Diagram Generator</h3>
          <p
            className="mb-8 font-normal text-gray-400 md:text-[14px] dark:text-neutral-200">
            An intelligent flow diagram visualization tool that transforms plain-text descriptions into structured flowcharts
          </p>
          <a 
            target="_blank"
            href="https://github.com/mahatidesai/FlowViz/tree/master"
            className="grid grid-cols-2 gap-4 hover:scale-[1.01] hover:shadow hover:shadow-purple-400 cursor-pointer rounded">
            <img
              src={Flowiz}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-gray-950/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          <img
              src={'https://i.pinimg.com/736x/11/c4/e5/11c4e57c24516b29e94bcebe15bac0f8.jpg'}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-gray-950/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </a>
        </div>
      ),
    },
    {
      title: "Ravel",
      content: (
        <div>
          <h3>Peer-to-Peer Vehicle Rental Platform</h3>
          <p
            className="mb-8 text-xs font-normal text-gray-400 md:text-[14px] dark:text-neutral-200">
            Ravel is a two-way vehicle rental application that allows users to both rent vehicles and list their own for others to borrow. The platform enables a seamless and secure experience for owners and renters, helping maximize vehicle utility while providing affordable mobility options.
          </p>
          <a 
          target="_blank"
            href={'https://github.com/mahatidesai/RAVEL/tree/master'} 
            className="grid grid-cols-2 gap-4 hover:scale-[1.01] hover:shadow hover:shadow-purple-400 cursor-pointer rounded">
            <img
              src={Ravel}
              alt="hero template"
              width={100}
              height={100}
              className="h-20 w-full rounded-lg object-cover shadow-gray-950/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={RavelAdmin}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-gray-950/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
           
          </a>
        </div>
      ),
    },
    {
      title: "Translator",
      content: (
        <div>
          <h3>Sign Language Translation Using Deep Learning Models</h3>
          <p
            className="mb-8 text-xs font-normal text-gray-400 md:text-[14px] dark:text-neutral-200">
           A research-driven project focused on automating sign language recognition by comparing multiple neural network architectures. The study implements and evaluates Convolutional Neural Networks (1D & 2D) and Long Short-Term Memory (LSTM) networks to classify sign gestures from sequential data.
          </p>
          <a
            target="_blank"
            href="https://github.com/mahatidesai/Sign-Language" 
            className="grid grid-cols-2 gap-4 hover:scale-[1.01] hover:shadow hover:shadow-purple-400 cursor-pointer rounded">
            <img
              src="https://i.pinimg.com/1200x/0e/76/7e/0e767ed508b662b8de8f8b2391015d30.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-gray-950/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://i.pinimg.com/originals/e7/2d/57/e72d57a15a1e46971289909f1c98f048.gif"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-gray-950/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
           
          </a>
        </div>
      ),
    },
    
  ];
  return (
    <div className="relative w-full overflow-clip bg-black">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineComponent
