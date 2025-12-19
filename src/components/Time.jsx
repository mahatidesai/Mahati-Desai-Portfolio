import { useState, useEffect } from "react";

const Time = () => {
    const [dateTime, setDateTime] = useState(new Date());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setDateTime(new Date());
        }, 1000); // update every second
    
        return () => clearInterval(timer);
      }, []);

    return(
        <div className="absolute bottom-0 right-0 flex justify-center items-center w-12 h-12 rounded-full bg-transparent border-2 border-dashed border-gray-400/60 font-medium text-gray-400 p-1 hover:border-gray-200">
        <p className="hover:scale-103  hover:text-gray-200 transition ease-in ">
            {dateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            })}
        </p>  
    </div>
    )
}
export default Time