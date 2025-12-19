import BlurText from "../components/BlurText";
import Time from "../components/Time";
const Intro = () => {
    return(
        <div className="background-wrapper flex w-full h-full p-0 justify-center items-center">
            <div className="heading text-[310%] md:text-[1100%] sm:text-9xl text-center text-white">
                <BlurText
                text="DEVELOPER & DESIGNER"
                delay={150}
                animateBy="words"
                direction="bottom"
                // onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
                />
            </div>
           <Time/> 
        </div>
    );
}
export default Intro