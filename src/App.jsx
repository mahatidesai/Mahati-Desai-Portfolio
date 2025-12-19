import { useEffect } from "react";
import Intro from "./screens/Intro";
import About from "./screens/About";
import { initSmoothScroll } from "./components/SmoothScroll";
import Projects from "./screens/Projects";

function App() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="min-h-screen">
        <Intro />
      </div>

      <div className="min-h-screen">
        <About />
      </div>

    </div>
  );
}

export default App;
